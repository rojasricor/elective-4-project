import { faChrome, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import SignInGif from './gifs/signIn.gif'

export const metadata = {
  title: 'Finanzas Educativas | Inicia Sesión'
}

export default function Signin () {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 mb-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
        <h2
          className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Iniciar sesion en Finanzas Educativas
        </h2>
      </div>
      <div className="flex justify-center items-center gap-16 mt-10">
        <div className="lg:flex lg:justify-center lg:items-center hidden">
          <Image width={400} height={400} src={SignInGif} alt="" />
        </div>
        <div className="border-b border-gray-900/10 pb-12 w-80">
          <form action="#" method="POST">
            {/* <!-- Username Input --> */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-medium leading-6 text-gray-900"
              >
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-[#008aae] sm:max-w-xs"
                autoComplete="off"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="password"
                className="block font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-[#008aae] sm:max-w-xs"
                autoComplete="off"
              />
            </div>
            {/* <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div> */}
            <p className="mb-6 text-sm">
              <Link
                href="/signup"
                className="leading-6 text-[#008aae] hover:text-[#79ad34]"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </p>
            <button
              type="submit"
              className="rounded-md px-10 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 bg-[#008aae] hover:bg-[#79ad34] disabled:opacity-50 w-full"
            >
              INGRESAR
            </button>
          </form>
          <p className="mt-6 text-center text-gray-500">
            ¿No estás registrado?{' '}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-[#008aae] hover:text-[#79ad34]"
            >
              Registrarme
            </Link>
          </p>
          {/* <!-- Sign up  Link --> */}
          {/* <div className="mt-6 text-blue-500 text-center">
            <Link href="/signup" className="hover:underline">
              Registrarme
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}
