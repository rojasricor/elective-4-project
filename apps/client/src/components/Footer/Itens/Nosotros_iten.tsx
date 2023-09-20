import { Link } from 'react-router-dom'

function Nosotros_item(): React.ReactNode {
  return (
    <div>
      <h2
        className="lg:text-41 text-3x1 md:bd-0 lg:leading-normal font-bold
        md:w-2/5 text-yellow-700"
      >
        Nosotros
      </h2>
      <li>
        <Link
          to="/about"
          className="text-base font-bold leading-6 text-gray-900 hover:text-[#7530e4]"
          // onClick={handleResetMenus}
        >
          ¿Quienes Somos?
        </Link>
      </li>
      <li>
        {' '}
        <Link
          to="/about"
          className="text-base font-bold leading-6 text-gray-900 hover:text-[#7530e4]"
          // onClick={handleResetMenus}
        >
          Mision
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-base font-bold leading-6 text-gray-900 hover:text-[#7530e4]"
          // onClick={handleResetMenus}
        >
          Vision
        </Link>
      </li>
    </div>
  )
}

export default Nosotros_item
