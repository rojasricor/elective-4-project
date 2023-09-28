import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Signin(): React.ReactNode {
  return (
    <>
      <Head>
        <title>Finanzas Educativas | Inicia Sesión</title>
      </Head>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-auto h-16"
            width={40}
            height={40}
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia sesión en tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-500 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-gray-500 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-sm flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Ingresar
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-10 text-center text-sm">
            <Link
              href="/"
              className="font-semibold text-red-600 hover:text-red-500"
            >
              ¿Olvidó su contraseña?
            </Link>

            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
