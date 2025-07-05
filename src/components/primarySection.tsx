import Image from 'next/image'

export default function PrimarySection() {
  return (
    <section className="pt-24 pb-12 px-4 items-center lg:flex md:px-8 bg-gray-50 w-full justify-center min-h-screen">
      <div className="flex justify-center max-w-screen-xl items-center w-full">
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

        <div className="flex-1 text-center mt-10 lg:mt-0 lg:ml-6">
          <div className="relative w-full h-96 sm:h-[28rem] lg:h-[32rem] mx-auto">
            <Image
              src="/dog-mainpage-transparent.png"
              alt="Pies przewodnik"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}