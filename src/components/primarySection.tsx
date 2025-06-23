export default function PrimarySection() {
  return(
    <section className="pt-24 pb-12 px-4 items-center lg:flex md:px-8 bg-gray-50 w-full justify-center">
        <div className="flex justify-center amax-w-screen-xl items-center">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-black font-bold text-4xl xl:text-5xl">
            Pies przewodnik
            <span className="text-bold"> w niskich cenach</span>
          </h1>
          <p className="text-black-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Sprawdź naszą ofertę psów asystujących dla osób niepełnosprawnych.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="/oferta"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Poznaj ofertę
            </a>
            <a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Wypróbuj
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="dog-mainpage-transparent.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
        </div>
      </section>
  )
}