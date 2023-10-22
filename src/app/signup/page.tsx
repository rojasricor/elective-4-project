<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import SignUpGif from './gifs/signUp.gif'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'
import Title from '@/components/Title'
import FormSignUp from './FormSignUp'

async function Signup () {
  const session = await getServerSession()

  if (session !== null && session?.user?.email !== 'admin@gmail.com') {
    return redirect('/profile/user')
  } else if (session !== null && session?.user?.email === 'admin@gmail.com') {
    return redirect('/profile/admin')
  }
=======
import Title from '@/components/Title'
import { Metadata } from 'next'
import Image from 'next/image'
import SignupForm from './SignupForm'
import SignUpGif from './gifs/signUp.gif'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Registrarse'
}
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab

function Signup(): React.ReactNode {
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Finanzas Educativas | Registrarse</title>
      </Head>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 mb-10 py-20">

        <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
          <h2 className="mt-3 text-center text-4xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Registrarse en <Title text='¡Finanzas Educativas!' isTextStatic />
          </h2>
        </div>

        <div className="mt-4 flex gap-10 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-6xl">
          <div className="hidden md:block">
            <div>
              <Image width={500} height={500} src={SignUpGif} alt="" />
            </div>
          </div>
          <FormSignUp />
        </div>
=======
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 mb-10 py-20">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
        <h2 className="mt-10 text-center text-4xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Registrarse en <Title text="¡Finanzas Educativas!" />
        </h2>
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab
      </div>

      <div className="mt-8 flex gap-10 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-6xl">
        <div className="hidden md:block">
          <div>
            <Image width={500} height={500} src={SignUpGif} alt="" />
          </div>
        </div>

        <SignupForm />
      </div>
    </div>
  )
}

export default Signup
