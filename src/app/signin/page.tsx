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
                className="block font-medium leading-6 text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
              />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="mt-2">
                 <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                  />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md px-10 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 bg-[#008aae] hover:bg-[#79ad34]"
              >
                INGRESAR
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-10 text-center">
            <Link
              href="/"
              className="font-semibold leading-6 text-[#79ad34] hover:text-[#008aae]"
            >
              ¿Olvidó su contraseña?
            </Link>

            <Link
              href="/signup"
              className="font-semibold leading-6 text-[#008aae] hover:text-[#79ad34]"
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
