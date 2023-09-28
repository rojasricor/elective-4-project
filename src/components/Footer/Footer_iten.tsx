import Contacto_iten from './Itens/Contacto_iten'
import Nosotros_item from './Itens/Nosotros_iten'
import Import_icon from './Icons/Import_Icon'

function Footer_iten(): React.ReactNode {
  return (
    <div className="bg-white border-2 border-[#0000001a] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-6 py-8">
      <Contacto_iten />
      <Nosotros_item />
      <Import_icon />
    </div>
  )
}

export default Footer_iten