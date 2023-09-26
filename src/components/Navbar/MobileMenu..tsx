import Link from "next/link";
import AboutListMobile from "./AboutListMobile";
import { ArrowUpIcon, ArrowDownIcon, CloseIcon, LogInIcon } from "./icons";

interface MobileMenuProps {
  isSubMenuMobileOpen: boolean;
  handleMenuMobileOpen: () => void;
  handleSubMenuMobileOpen: () => void;
  handleResetMenus: () => void;
}

function MobileMenu({
  isSubMenuMobileOpen,
  handleMenuMobileOpen,
  handleSubMenuMobileOpen,
  handleResetMenus,
}: MobileMenuProps): React.ReactNode {
  return (
    <div className="lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5" onClick={handleResetMenus}>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-[#79ad34]"
            onClick={handleMenuMobileOpen}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Link
                href="/home"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
                onClick={handleResetMenus}
              >
                Inicio
              </Link>
              <Link
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
                onClick={handleResetMenus}
              >
                Contacto
              </Link>

              <div className="-mx-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
                  aria-controls="disclosure-1"
                  aria-expanded="false"
                  onClick={handleSubMenuMobileOpen}
                >
                  Nosotros
                  {isSubMenuMobileOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </button>
                {isSubMenuMobileOpen && (
                  <AboutListMobile handleResetMenus={handleResetMenus} />
                )}
              </div>
            </div>
            <div className="py-6">
              <Link
                href="/signup"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
                onClick={handleResetMenus}
              >
                Registrarse
              </Link>
              <Link
                href="/signin"
                className="-mx-3 rounded-lg px-3 flex items-center gap-2 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-[#79ad34]"
                onClick={handleResetMenus}
              >
                Ingresar
                <LogInIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
