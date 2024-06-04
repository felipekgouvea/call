import { buildNextAuthOptions } from '@/app/_lib/auth'
import NextAuth from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, buildNextAuthOptions(req, res))

export { handler as GET, handler as POST }
