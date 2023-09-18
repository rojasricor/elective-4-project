import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagramSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

function Import_icon(): React.ReactNode {
  const Facebook = faFacebook
  const Twitter = faTwitter
  const Linkedin = faLinkedin
  const Intelgran = faInstagramSquare
  const Youtube = faYoutube

  return (
    <div className="p-2 px-5">
      <h2 className="font-bold">Siguenos en: </h2>
      <FontAwesomeIcon
        icon={Facebook}
        className="mr-4 
        text-blue-700
        hover:bg-blue-500 
        w-6 h-6"
        title="Facebook"
      />
      <FontAwesomeIcon
        icon={Twitter}
        className="mr-4 
      text-blue-400
      hover:bg-blue-300
      w-6 h-6"
        title="Twitter o X"
      />
      <FontAwesomeIcon
        icon={Linkedin}
        className="mr-4 
      text-blue-700
      hover:bg-blue-300
      w-6 h-6"
        title="Linkedin"
      />
      <FontAwesomeIcon
        icon={Intelgran}
        className="mr-4 
      text-orange-900
      hover:bg-red-300
      w-6 h-6"
        title="Intelgran"
      />
      <FontAwesomeIcon
        icon={Youtube}
        className="mr-4 
      text-red-900
      hover:bg-red-400
      w-7 h-6"
        title="Youtube"
      />
    </div>
  )
}
export default Import_icon
