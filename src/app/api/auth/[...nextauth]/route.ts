import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from '@/libs/db'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        document: { label: 'Document', type: 'text', placeholder: 'Put your document' },
        password: { label: 'Password', type: 'password', placeholder: 'Put your password' }
      },
      async authorize (credentials, _) {
        if (credentials?.document === null || credentials?.password === null) return null

        const existingUser = await db.user.findUnique({
          where: { document: credentials?.document }
        })

        if (existingUser === null) return null

        const passwordMatch = await bcrypt.compare(credentials?.password ?? '', existingUser.password)

        if (!passwordMatch) return null

        return {
          id: `${existingUser.id}`,
          document_type: existingUser.document_type,
          document: existingUser.document,
          first_name: existingUser.first_name,
          last_name: existingUser.last_name,
          phone_number: existingUser.phone_number,
          email: existingUser.email,
          createdAt: existingUser.createdAt,
          updatedAt: existingUser.updatedAt
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt ({ token, user }) {
      if (user !== undefined) token.user = user
      return token
    },
    async session ({ session, token }) {
      return {
        ...session,
        user: token.user
      }
    }
  }
})

export { handler as GET, handler as POST }
