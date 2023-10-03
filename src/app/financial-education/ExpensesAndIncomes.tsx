import { Income, Expense } from './svgs'

export default function ExpensesAndIncomes () {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-5 flex flex-col max-w-3xl lg:text-center">
        <div className="mt-4 flex justify-center items-center gap-14 sm:text-4xl">
          <div className="hidden lg:block">
            <Expense />
          </div>
          <div>
            <p className="text-3xl text-left font-bold tracking-tight text-gray-900">
              ¿Qué son ingresos?
            </p>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              Los ingresos son la cantidad de dinero recaudada o ganada como resultado de trabajar o participar en acciones socioeconómicas.

              Los ingresos se pueden clasificar como rentas, salarios monetarios, beneficios, intereses, dividendos, alquileres entre otros; los ingresos pueden ser usados para financiar gastos, inversiones, ahorros.
            </p>
          </div>
        </div>
        <div className="mt-16 sm:mt-28 flex justify-center items-center gap-14 sm:text-4xl">
          <div>
            <p className="text-3xl text-left font-bold tracking-tight text-gray-900">
              ¿Qué son gastos?
            </p>
            <p className="mt-6 text-lg text-left leading-8 text-gray-600">
              La cultura occidental y su sala de prensa, Hollywood, nos han inculcado un estilo de vida extravagante. Muchas fiestas, vida social, largos viajes, mansiones, yates, negocios y relaciones. Y gran parte de la población tiene como su sueño ese estilo de vida irreal. Todo esto no sería tan peligroso si no pasara de un deseo momentáneo; pero para un gran sector de la población, es la meta fundamental a lograr. Para muchos, los escasos ingresos se traducen en imitar este estilo de vida, en adquirir posesiones innecesarias; en pocas palabras, en una mala administración de los gastos personales y familiares.
            </p>
          </div>
          <div className="hidden lg:block">
            <Income />
          </div>
        </div>
      </div>
    </div>
  )
}
