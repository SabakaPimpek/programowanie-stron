'use client'

import { useEffect, useState } from "react"

type HeaderProps = {
  sticky?: boolean
}

export default function Header(props: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if(!props.sticky) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const navigation = [
    { title: "Nasi podopieczni", path: "/#dogSection" },
    { title: "Oferta", path: "/oferta" },
  ]

  return (
    <header
      className={`w-full z-50 top-0 bg-white shadow-md transition-all duration-300 dark:text-black ${
        props.sticky ? "sticky" : ""
      } ${isScrolled ? "" : "py-3"}`}
    >
      <nav className="items-center px-3 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="logo.png"
            width={isScrolled ? 50 : 80} // zmniejsz logo
            height={isScrolled ? 20 : 50}
            alt="Float UI logo"
          />
          <span className={`font-semibold text-lg transition-all duration-300 ${isScrolled ? "text-base" : "text-xl"}`}>
            Jakub Kulesa
          </span>
        </a>
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