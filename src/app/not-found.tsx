import { faContao, faHackerNews } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Página No Encontrada'
}

export default function NotFound() {
  const Contacto = faContao
  const Youtube = faHackerNews

  return (
    <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
      <div className="hidden md:flex md:w-1/2 p-8">
        <Image
          width={500}
          height={500}
          src="/gatico2.jpg"
          alt="Placeholder Image"
          className="object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          404 Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          href="/"
          className="px-4 py-3 mx-2 bg-blue-500 text-white rounded-lg inline-flex items-center hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
        >
          <FontAwesomeIcon className="mr-1 w-4 h-4" icon={Youtube} />
          <span className="text-xs">Go to Home</span>
        </Link>
        <Link
          href="/contact"
          className="px-4 py-3 mx-2 bg-blue-500 text-white rounded-lg inline-flex items-center hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
        >
          <FontAwesomeIcon className="mr-1 w-4 h-4" icon={Contacto} />
          <span className="text-xs">Go to Contact</span>
        </Link>
      </div>
    </div>
  )
}
