import { db } from '@/libs/db'
import { NextResponse } from 'next/server'
import { signUpSchema } from '@/schemas/user.schema'
import bcrypt from 'bcryptjs'

export async function GET () {
  const users = await db.user.findMany()
  console.log({ users })

  return NextResponse.json(users)
}

export async function POST (request: Request) {
  try {
    const body = await request.json()

    const {
      document_type: documentType,
      document,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      password
    } = signUpSchema.parse(body)

    const existingUserByDocument = await db.user.findUnique({
      where: { document }
    })

    if (existingUserByDocument !== null) {
      return NextResponse.json({ messsage: 'Document already exists' }, { status: 400 })
    }

    const existingUserByEmail = await db.user.findUnique({
      where: { email }
    })

    if (existingUserByEmail !== null) {
      return NextResponse.json({ messsage: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await db.user.create({
      data: {
        document_type: documentType,
        document,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email,
        password: hashedPassword
      }
    })

    const { password: _, ...user } = newUser

    return NextResponse.json({
      user,
      message: 'User created successfully'
    }, { status: 201 })
  } catch (error: any) {
    console.log(error.errors)
    if (error?.errors !== null) {
      const errorsMessages: Record<string, string> = {}
      const { errors } = error

      errors.forEach(({ message, path }: { message: string, path: string[] }) => {
        errorsMessages[path.join('')] = message
      })

      return NextResponse.json(errorsMessages, { status: 500 })
    }

    return NextResponse.json({ message: 'Something went wrong.' }, { status: 500 })
  }
}
