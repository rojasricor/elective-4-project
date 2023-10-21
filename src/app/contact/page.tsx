import {
  faFacebook,
  faGithub,
  faInstagramSquare,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Contacto'
}

function Contact(): React.ReactNode {
  const Facebook = faFacebook
  const Twitter = faTwitter
  const GithHub = faGithub
  const Instagram = faInstagramSquare
  const Youtube = faYoutube

  return (
    <div className="relative flex items-top min-h-screen bg-white sm:items-right sm:pt-0 mt-4">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-right text-4xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Contactar a Finanzas Educativas
        </h2>
        <div className="mt-2 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-200 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-gray-900 font-extrabold tracking-tight">
                Ponerse en contacto
              </h1>
              <p className="text-normal text-base sm:text-2xl font-medium text-gray-800 dark:text-gray-800 mt-2">
                Llena el formulario para contacto rapido
              </p>

              <div className="flex items-center mt-8 text-gray-800 dark:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-blue-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-80">
                  Calle 18 Carrera 1ª Barrio/Arkabal Espinal, Tolima - Colombia
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +57 3186329251
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-red-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  finanzaeducativa@gmail.com
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-800">
                <div className="ml-4 text-normal text-lg tracking-wide font-semibold w-100">
                  Otros Contactos:
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-800">
                <ul className="flex justify-center items-center gap-6">
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={Facebook}
                        className="mr-4 text-gray-400 hover:text-[#5c54f9] transition-colors w-7 h-7"
                        title="Facebook"
                        color="blue"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={Instagram}
                        className="mr-4 text-gray-400 hover:text-[#ff4e69] transition-colors w-7 h-7"
                        title="Instagram"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={Twitter}
                        className="mr-4 text-gray-400 hover:text-[#5a67fe] transition-colors w-7 h-7"
                        title="Twitter o X"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={GithHub}
                        className="mr-4 text-gray-400 hover:text-[#183137] transition-colors w-6 h-7"
                        title="GithHub"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon
                        icon={Youtube}
                        className="mr-4 text-gray-400 hover:text-[#ab333f] transition-colors w-7 h-7"
                        title="Youtube"
                        color="red"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <form className="p-6 flex flex-col justify-center mt-0">
              <div className="flex flex-col mt-2 relative">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Nombre completo"
                  className="w-100 mt-2 py-3 px-3 pl-12 rounded-lg bg-white dark:bg-gray-200 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2 relative">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Correo Electrónico"
                  className="w-100 mt-2 py-3 px-3 pl-12 rounded-lg bg-white dark:bg-gray-200 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2 relative">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Número de teléfono"
                  className="w-100 mt-2 py-3 px-3 pl-12 rounded-lg bg-white dark:bg-gray-200 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2 relative">
                <label htmlFor="message" className="hidden">
                  Asunto
                </label>
                <div className="absolute left-0 top-0 mt-5 ml-4 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Asunto"
                  className="w-100 h-20 mt-2 py-3 px-3 pl-12 rounded-lg bg-white dark:bg-gray-200 border border-gray-400 dark:border-gray-700 text-gray-400 font-semibold focus:border-indigo-700 focus:outline-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="middle md:w-40  mt-4 none items-center mr-4 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
