export default function PricingSection() {
  const plans = [
    {
      name: "Podstawowy",
      price: 5000,
      features: [
        "3-miesięczne szkolenie podstawowe",
        "Dopasowanie psa do właściciela",
        "Wsparcie trenera online przez 1 miesiąc",
      ],
    },
    {
      name: "Zaawansowany",
      price: 9000,
      features: [
        "6-miesięczne szkolenie zaawansowane",
        "Indywidualne dopasowanie i testy",
        "Wsparcie trenera przez 6 miesięcy",
        "Podstawowy zestaw akcesoriów",
      ],
    },
    {
      name: "Pełne wsparcie",
      price: 12000,
      features: [
        "Kompleksowe szkolenie psa i właściciela",
        "Wsparcie trenerskie przez cały rok",
        "Opieka weterynaryjna przez 6 miesięcy",
        "Zestaw premium akcesoriów",
      ],
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Nasze pakiety szkoleniowe
          </h3>
          <div className="mt-3 max-w-xl mx-auto text-gray-600">
            <p>
              Oferujemy kompleksowe programy szkoleniowe dla psów przewodników. Wybierz pakiet, który najlepiej odpowiada Twoim potrzebom.
            </p>
          </div>
        </div>
        <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex-1 flex flex-col p-8 rounded-xl border-2 bg-white shadow-sm"
            >
              <div>
                <span className="text-indigo-600 font-medium">{item.name}</span>
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  {item.price}zł{" "}
                  <span className="text-xl text-gray-600 font-normal">
                    / jednorazowo
                  </span>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="px-4 py-3 cursor-pointer rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Zamów szkolenie
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontakt */}
      <div className="text-center mt-12 text-lg font-light">
        Potrzebujesz pomocy w wyborze?
        <a
          href="/contact"
          className="hover:text-blue-700 ml-2 text-violet-600 font-light"
        >
          Skontaktuj się z nami
        </a>
      </div>
    </section>
  );
}
