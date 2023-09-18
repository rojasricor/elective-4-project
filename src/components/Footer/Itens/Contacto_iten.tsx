import { Link } from 'react-router-dom'

function Contacto_Item(): React.ReactNode {
  return (
    <div>
      <h2
        className="lg:text-41 text-3x1 md:bd-0 lg:leading-normal font-bold
        md:w-2/5 text-yellow-700"
      >
        Finanzas Educativas
      </h2>
      <li>
        <Link
          to="/contact"
          className="text-base font-bold leading-6 text-gray-900 hover:text-[#7530e4]"
          // onClick={handleResetMenus}
        >
          Contacto
        </Link>
      </li>
    </div>
  )
}

export default Contacto_Item
