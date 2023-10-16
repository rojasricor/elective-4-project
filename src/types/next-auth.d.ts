import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: integer
      document_type: string
      document: string
      first_name: string
      last_name: string
      phone_number: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }
  }
}
