import { faChrome, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import imagen from './img/diseno-de-interfaz-de-usuario.png'

export const metadata = {
  title: 'Finanzas Educativas | Inicia Sesión'
}

export default function Signin() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 pt-6 lg:px-8 mb-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
        <h2
          className="mt-10
          text-center text-4xl md:text-3xl
          font-bold leading-9 tracking-tight
           text-gray-900"
        >
          Iniciar sesion en Finanzas Educativas
        </h2>
      </div>
      <div className="flex justify-center items-center gap-16 mt-16">
        <div className="lg:flex lg:justify-center lg:items-center hidden">
          <Image
            width={400}
            height={400}
            src={imagen}
            alt="Placeholder Image"
            className="object-cover"
          ></Image>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <form action="#" method="POST">
            {/* <!-- Username Input --> */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
              />
            </div>
            {/* <!-- Remember Me Checkbox --> */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="text-blue-500"
              />
              <label htmlFor="remember" className="text-gray-600 ml-2">
                Remember Me
              </label>
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white
            font-semibold
            rounded-md py-2
            px-4 w-full"
            >
              Login
            </button>
          </form>
          {/* <!-- Sign up  Link --> */}
          <div className="mt-6 text-blue-500 text-center">
            <Link href="/signup" className="hover:underline">
              Sign up Here
            </Link>
          </div>
          <p className="text-center my-4">Or continue with</p>
          <div className="flex gap-4">
            <button
              className="flex items-center border border-gray-400
                    px-4 w-1/2 py-2 rounded-md
                    text- font-semibold focus:outline-none
                    cursor-pointer hover:bg-[#cfcfcf]"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="mr-2 w-5 h-5"
                color="blue"
              />
              Facebook
            </button>
            <button
              className="flex items-center
                    border border-gray-400
                    px-4 w-1/2 py-2 rounded-md
                    text- font-semibold focus:outline-none
                    cursor-pointer hover:bg-[#cfcfcf]"
            >
              <FontAwesomeIcon
                icon={faChrome}
                className="mr-2 w-5 h-5"
                color="green"
              />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
