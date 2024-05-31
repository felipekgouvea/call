import { prisma } from '@/app/_lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, username } = await req.json()
    const newUser = await prisma.user.create({ data: { name, username } })

    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 },
    )
  }
}
