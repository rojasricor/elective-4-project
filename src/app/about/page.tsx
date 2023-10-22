<<<<<<< HEAD
'use client'

import Head from 'next/head'
import { AboutUs, Mision, Vision } from './svgs'
import Team from './team/team'
import AboutSection from './AboutSection'

export default function About (): React.ReactNode {
=======
import { Metadata } from 'next'
import Team from './Team'
import VisionToggle from './VisionToggle'
import ArrowDown from './icons/ArrowDown'
import { AboutUs, Mision, Vision } from './svgs'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Sobre Nosotros'
}

function About(): React.ReactNode {
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab
  return (
    <>
      <div id="quienesSomos" className="w-5 h-5 mt-[-70px]" />
      <main className="px-8 md:px-16 py-40">
        <AboutSection
          svgName='ABOUT_US'
          svgInLeftPosition
          title='¿Quienes somos?'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          delectus provident necessitatibus laudantium in officia soluta
          vitae quasi autem consequatur dolor omnis ratione incidunt
          voluptatum illum temporibus nostrum similique saepe consequuntur,
          aspernatur esse commodi inventore. Quisquam, quibusdam.
          Laboriosam, maiores labore?'
          moreDescription=''
        />
        <div id="mision" />
        <AboutSection
          svgName='MISION'
          svgInLeftPosition={false}
          title='Misión'
          description='Nuestra misión es empoderar a las personas para que tomen el
          control de su futuro financiero a través de la promoción de la
          tendencia al ahorro y la educación financiera. Nos esforzamos por
          proporcionar las herramientas, recursos y conocimientos necesarios
          para que las personas tomen decisiones informadas sobre sus
          finanzas personales y alcancen sus metas financieras a corto y
          largo plazo.'
          moreDescription=''
        />
        <div id="vision" />
<<<<<<< HEAD
        <AboutSection
          svgName='VISION'
          svgInLeftPosition
          title='Visión'
          description='Nuestra visión es construir un mundo en el que la tendencia al ahorro
          y la educación financiera sean accesibles y valoradas por todos.
          Visualizamos una sociedad en la que las personas comprendan los
          principios fundamentales de las finanzas personales, tomen decisiones
          financieras inteligentes y estén preparadas para enfrentar los
          desafíos económicos con confianza.'
          moreDescription='Para lograr nuestra visión, trabajamos incansablemente para brindar
          información educativa de alta calidad, herramientas interactivas y
          recursos prácticos que ayuden a las personas a administrar sus
          finanzas de manera efectiva. Aspiramos a ser líderes en la promoción
          de la educación financiera y la cultura del ahorro, contribuyendo
          así a una sociedad más próspera y económicamente segura para todos.'
        />
=======
        <section className="w-full md:flex md:justify-center md:items-center md:gap-16 mt-16">
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

            <VisionToggle />
          </div>
        </section>
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab

        <div id="team" />
        <Team />
      </main>
    </>
  )
}
