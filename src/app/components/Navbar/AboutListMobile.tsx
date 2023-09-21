import Link from "next/link";

interface AboutListMobileProps {
  handleResetMenus: () => void;
}

function AboutListMobile({
  handleResetMenus,
}: AboutListMobileProps): React.ReactNode {
  return (
    <div className="mt-2 space-y-2" id="disclosure-1">
      <Link
        href="/about"
        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
        onClick={handleResetMenus}
      >
        ¿Quienes somos?
      </Link>
      <Link
        href="/about"
        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
        onClick={handleResetMenus}
      >
        Misión
      </Link>
      <Link
        href="/about"
        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
        onClick={handleResetMenus}
      >
        Visión
      </Link>
    </div>
  );
}

export default AboutListMobile;
