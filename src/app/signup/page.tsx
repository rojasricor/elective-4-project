import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SignUpGif from './gifs/signUp.gif'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Registrarse',
}

function Signup(): React.ReactNode {
  return (
    <div className=" flex min-h-full flex-1 flex-col justify-center px-6 pb-12 pt-6 lg:px-8 mb-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl md:max-w-3xl">
        <h2 className="mt-10 text-center text-4xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Registrarse en Finanzas Educativas
        </h2>
      </div>

      <div className="mt-8 flex gap-10 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-6xl">
        <div className="hidden md:block">
          <div>
            <Image width={500} height={500} src={SignUpGif} alt="" />
          </div>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="tipoDocumento"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Tipo de Documento
                  </label>
                  <div className="mt-2">
                    <select
                      id="tipoDocumento"
                      name="tipoDocumento"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-[#008aae] sm:max-w-xs"
                    >
                      <option>Cédula de Ciudadanía</option>
                      <option>Cédula de Extranjería</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="numeroIdentificacion"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Número de Identificación
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="numeroIdentificacion"
                      id="numeroIdentificacion"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="nombres"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Nombres
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nombres"
                      id="nombres"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="apellidos"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Apellidos
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="apellidos"
                      id="apellidos"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Correo Electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="celular"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Celular
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      name="celular"
                      id="celular"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="password1"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password1"
                      id="password1"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="password2"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Confirmar Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-[#008aae]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <div className="relative flex justify-center items-center gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="terminos"
                      name="terminos"
                      type="checkbox"
                      className="h-6 w-6 rounded border-gray-300 text-[#008aae] focus:ring-[#79ad34]"
                    />
                  </div>
                  <div className="leading-6">
                    <label
                      htmlFor="terminos"
                      className="font-medium text-gray-900"
                    >
                      He leído y acepto los Términos Legales y la Política de
                      Privacidad de Finanzas Educativas
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              className="rounded-md px-10 py-2 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300 bg-[#008aae] hover:bg-[#79ad34]"
            >
              REGISTRARME
            </button>
          </div>
          <p className="mt-10 text-center text-gray-500">
            ¿Ya estás registrado?{' '}
            <Link
              href="/signin"
              className="font-semibold leading-6 text-[#008aae] hover:text-[#79ad34]"
            >
              Iniciar Sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
