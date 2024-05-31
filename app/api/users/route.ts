import { prisma } from '@/app/_lib/prisma'
import { serialize } from 'cookie'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, username } = await request.json()

    const userExists = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (userExists) {
      return NextResponse.json(
        { message: 'Username already taken.' },
        { status: 400 },
      )
    }

    const newUser = await prisma.user.create({ data: { name, username } })

    const cookie = serialize('username', username, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    const response = NextResponse.json(newUser, { status: 201 })
    response.headers.append('Set-Cookie', cookie)

    return response
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 },
    )
  }
}
