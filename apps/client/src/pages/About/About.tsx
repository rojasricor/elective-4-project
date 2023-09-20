import { Helmet } from 'react-helmet'
import AboutUs from './svgs/AboutUs.svg'
import Mision from './svgs/Mision.svg'
import Vision from './svgs/Vision.svg'
import ArrowRight from './Icons/ArrowRight'

function About(): React.ReactNode {
  return (
    <>
      <Helmet>
        <title>Finanzas Educativas | Nosotros</title>
      </Helmet>

      <main className="px-40 py-20">
        <section className="flex justify-center items-center gap-16">
          <div className="w-96">
            <img src={AboutUs} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-3 w-5/12">
            <h1 className="font-bold text-4xl text-[#79ad34]">
              ¿Quienes somos?
            </h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              delectus provident necessitatibus laudantium in officia soluta
              vitae quasi autem consequatur dolor omnis ratione incidunt
              voluptatum illum temporibus nostrum similique saepe consequuntur,
              aspernatur esse commodi inventore. Quisquam, quibusdam.
              Laboriosam, maiores labore?
            </p>
            <button className="text-white font-bold py-2 px-6 mt-4 rounded-2xl transition-colors duration-300 flex justify-center items-center gap-2 bg-[#008aae] hover:bg-[#79ad34]">
              Conocer más
              <ArrowRight />
            </button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-16 mt-32">
          <div className="flex flex-col gap-3 w-5/12">
            <h1 className="font-bold text-4xl text-[#79ad34]">Misión</h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              delectus provident necessitatibus laudantium in officia soluta
              vitae quasi autem consequatur dolor omnis ratione incidunt
              voluptatum illum temporibus nostrum similique saepe consequuntur,
              aspernatur esse commodi inventore. Quisquam, quibusdam.
              Laboriosam, maiores labore?
            </p>
            <button className="text-white font-bold py-2 px-6 mt-4 rounded-2xl transition-colors duration-300 flex justify-center items-center gap-2 bg-[#008aae] hover:bg-[#79ad34]">
              Conocer más
              <ArrowRight />
            </button>
          </div>
          <div className="w-96">
            <img src={Mision} alt="" className="w-full" />
          </div>
        </section>
        <section className="flex justify-center items-center gap-16 mt-32">
          <div className="w-96">
            <img src={Vision} alt="" className="w-full" />
          </div>
          <div className="flex flex-col gap-3 w-5/12">
            <h1 className="font-bold text-4xl text-[#79ad34]">Visión</h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              delectus provident necessitatibus laudantium in officia soluta
              vitae quasi autem consequatur dolor omnis ratione incidunt
              voluptatum illum temporibus nostrum similique saepe consequuntur,
              aspernatur esse commodi inventore. Quisquam, quibusdam.
              Laboriosam, maiores labore?
            </p>
            <button className="text-white font-bold py-2 px-6 mt-4 rounded-2xl transition-colors duration-300 flex justify-center items-center gap-2 bg-[#008aae] hover:bg-[#79ad34]">
              Conocer más
              <ArrowRight />
            </button>
          </div>
        </section>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-[#79ad34] sm:text-4xl">
                Nuestro Equipo
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                magni incidunt voluptate dicta possimus veritatis voluptatem,
                illo magnam quis quo?
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-[#008aae]">
                      Lorem, ipsum.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-[#008aae]">
                      Lorem, ipsum.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-[#008aae]">
                      Lorem, ipsum.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
