export default function Header()
{
      const navigation = [
    { title: "Nasi podopieczni", path: "/#dogSection"},
    { title: "Klienci", path: "javascript:void(0)" },
  ];


    return(
        <header className="w-full shadow-md sticky top-0 bg-white z-50">
        <nav className="items-center px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6 ">
          <a href="/" className="flex justify-center items-center">
            <img
              src="logo.png"
              width={100}
              height={50}
              alt="Float UI logo"
            />
            <span>LOGO</span>
          </a>
          {/* <span>DOG</span> */}
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            {navigation.map((item, idx) => (
              <li className="text--200" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
            <li>
              <a
                    href="/contact"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-full md:inline-flex"
                  >
                    Skontaktuj się
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
            </li>
          </ul>
        </nav>
      </header>
    )
}