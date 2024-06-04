import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/_lib/prisma'
import { serialize } from 'cookie'

export async function POST(request: NextRequest) {
  const { name, username } = await request.json()

  const userExists = await prisma.user.findUnique({
    where: { username },
  })

  if (userExists) {
    return NextResponse.json(
      { message: 'Username already taken.' },
      { status: 400 },
    )
  }

  const user = await prisma.user.create({
    data: { name, username },
  })

  // Serializa o cookie
  const cookie = serialize('@call:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  // Cria uma nova resposta e define o cabeçalho Set-Cookie
  const response = NextResponse.json(user, { status: 201 })
  response.headers.set('Set-Cookie', cookie)

  return response
}
