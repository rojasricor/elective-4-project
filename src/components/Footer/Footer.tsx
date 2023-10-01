import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagramSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'

export default function Footer (): React.ReactNode {
  const Facebook = faFacebook
  const Twitter = faTwitter
  const GithHub = faGithub
  const Instagram = faInstagramSquare
  const Youtube = faYoutube

  return (
    <footer className="flex flex-col justify-center items-center gap-10 py-10 border-t border-[#0f172a1a]">
      <div>
        <ul className="grid grid-cols-2 grid-rows-3 gap-5 sm:flex sm:gap-8 text-gray-400">
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/">Inicio</Link>
          </li>
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/financial-education">Educación Financiera</Link>
          </li>
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/contact">Contacto</Link>
          </li>
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/about">Nosotros</Link>
          </li>
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/signup">Registrarse</Link>
          </li>
          <li>
            <Link className='hover:text-[#79ad34] transition-all' href="/signin">Ingresar</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link href="#">
              <FontAwesomeIcon
                icon={Facebook}
                className="mr-4 text-gray-400 hover:text-[#008aae] transition-colors w-6 h-6"
                title="Facebook"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon
                icon={Instagram}
                className="mr-4 text-gray-400 hover:text-[#008aae] transition-colors w-6 h-6"
                title="Instagram"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon
                icon={Twitter}
                className="mr-4 text-gray-400 hover:text-[#008aae] transition-colors w-6 h-6"
                title="Twitter o X"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon
                icon={GithHub}
                className="mr-4 text-gray-400 hover:text-[#008aae] transition-colors w-6 h-6"
                title="GithHub"
              />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FontAwesomeIcon
                icon={Youtube}
                className="mr-4 text-gray-400 hover:text-[#008aae] transition-colors w-7 h-6"
                title="Youtube"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p className='text-sm text-gray-400'>© 2023 Finanzas Educativas. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
