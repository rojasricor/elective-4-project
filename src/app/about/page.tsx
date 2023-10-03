'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ArrowDown from './icons/ArrowDown'
import ArrowUp from './icons/ArrowUp'
import { AboutUs, Mision, Vision } from './svgs'
import Team from './team/team'

function About (): React.ReactNode {
  const [viewMoreInfoVision, setViewMoreInfoVision] = useState(false)

  const handleViewMoreInfoVision = () => {
    setViewMoreInfoVision(!viewMoreInfoVision)
  }

  return (
    <>
      <Head>
        <title>Finanzas Educativas | Nosotros</title>
      </Head>

      <div id="quienesSomos" className="w-5 h-5 mt-[-70px]" />
      <main className="px-8 md:px-16 py-20">
        <section className="w-full md:flex md:justify-center md:items-center md:gap-16 mt-5">
          <div className="hidden md:block lg:w-96">
            <AboutUs />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-5/12">
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
              <ArrowDown />
            </button>
          </div>
        </section>
        <div id="mision" />
        <section className="w-full md:flex md:justify-center md:items-center md:gap-16 mt-16 md:mt-32">
          <div className="flex flex-col gap-3 w-full md:w-5/12">
            <h1 className="font-bold text-4xl text-[#79ad34]">Misión</h1>
            <p className="text-gray-600 text-lg">
              Nuestra misión es empoderar a las personas para que tomen el
              control de su futuro financiero a través de la promoción de la
              tendencia al ahorro y la educación financiera. Nos esforzamos por
              proporcionar las herramientas, recursos y conocimientos necesarios
              para que las personas tomen decisiones informadas sobre sus
              finanzas personales y alcancen sus metas financieras a corto y
              largo plazo.
            </p>
            {/* <button className="text-white font-bold py-2 px-6 mt-4 rounded-2xl transition-colors duration-300 flex justify-center items-center gap-2 bg-[#008aae] hover:bg-[#79ad34]">
              Conocer más
              <ArrowDown />
            </button> */}
          </div>
          <div className="hidden md:block lg:w-96">
            <Mision />
          </div>
        </section>
        <div id="vision" />
        <section className="w-full md:flex md:justify-center md:items-center md:gap-16 mt-16 md:mt-32">
          <div className="hidden md:block lg:w-96">
            <Vision />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-5/12">
            <h1 className="font-bold text-4xl text-[#79ad34]">Visión</h1>
            <p className="text-gray-600 text-lg">
              Nuestra visión es construir un mundo en el que la tendencia al
              ahorro y la educación financiera sean accesibles y valoradas por
              todos. Visualizamos una sociedad en la que las personas comprendan
              los principios fundamentales de las finanzas personales, tomen
              decisiones financieras inteligentes y estén preparadas para
              enfrentar los desafíos económicos con confianza.
            </p>
            {viewMoreInfoVision && (
              <p className="text-gray-600 text-lg">
                Para lograr nuestra visión, trabajamos incansablemente para
                brindar información educativa de alta calidad, herramientas
                interactivas y recursos prácticos que ayuden a las personas a
                administrar sus finanzas de manera efectiva. Aspiramos a ser
                líderes en la promoción de la educación financiera y la cultura
                del ahorro, contribuyendo así a una sociedad más próspera y
                económicamente segura para todos.
              </p>
            )}
            <button
              className="text-white font-bold py-2 px-6 mt-4 rounded-2xl transition-colors duration-300 flex justify-center items-center gap-2 bg-[#008aae] hover:bg-[#79ad34]"
              onClick={handleViewMoreInfoVision}
            >
              {viewMoreInfoVision
                ? 'Ocultar Información extra'
                : 'Mostrar más información'}
              {viewMoreInfoVision ? <ArrowUp /> : <ArrowDown />}
            </button>
          </div>
        </section>

        <div id="team" />
        <Team />
      </main>
    </>
  )
}

export default About
