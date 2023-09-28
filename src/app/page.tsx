import Head from 'next/head'

function Home(): React.ReactNode {
  const stats = [
    { id: 1, name: 'Transacciones cada 24 horas', value: '44 millones' },
    { id: 2, name: 'Activos bajo tenencia', value: '$119 trillones' },
    { id: 3, name: 'Nuevos usuarios anualmente', value: '46,000' },
  ]

  return (
    <>
      <Head>
        <title>Finanzas Educativas | Inicio</title>
      </Head>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <section className="relative isolate overflow-hidden bg-white px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Lorem Ipsum</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Lorem ipsum dolor</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="bg-white py-7 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mb-5">
            <p>Consejos Financieros...</p>
          </blockquote>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-200"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 b g-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>

            <div
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-200"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 b g-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>

            <div
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-200"
            >
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 b g-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300"></div>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white py-7 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mb-5">
            <p>Videos...</p>
          </blockquote>
          <dl className="flex text-center items-center justify-between">
            <div
              role="status"
              className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-300 w-11/12"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>

            <div
              role="status"
              className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-300 w-11/12"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>

            <div
              role="status"
              className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-300 w-11/12"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

export default Home
