import FileInput from "./FileInput";


export default function formContact() {
  return (
    <div>
      <section className="text-gray-700 bg-gray-50 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl font-semibold font-medium title-font mb-4 text-gray-900">
              Skontaktuj się z nami
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Masz pytania? Chętnie pomożemy!
            </p>
          </div>
          <form className="lg:w-1/2 md:w-2/3 mx-auto" encType="multipart/form-data">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-400 focus:border-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2 ">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-400 focus:border-indigo-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-400 focus:border-indigo-600 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <FileInput />
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                  Wyślij
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">przyklad@email.com</a>
                <p className="leading-normal my-5">
                  Ul. Kwiatowa 13
                  <br />
                  Warszawa, 01-999
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}