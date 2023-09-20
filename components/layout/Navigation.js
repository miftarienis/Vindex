import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const NavItem = ({ className, children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className={`${className} block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent  text-lg font-bold uppercase`}
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div
      className={`fixed w-full top-0 left-0 ${
        color ? 'bg-gray-200' : 'bg-gray-200 md:bg-transparent'
      }`}
      style={{ zIndex: '9999' }}
    >
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-4">
            <Link href="/">
              <Image src="/img/logo.png" width={220} height={123} alt="logo" />
            </Link>
          </div>
          <div className="col-2 md:hidden block mb-2">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              {
                <button
                  className="text-black bg-gray-200 w-10 h-10 relative focus:outline-none"
                  onClick={() => setMenu(!menu)}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                        menu ? 'rotate-45' : '-translate-y-1.5'
                      }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                        menu ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                        menu ? '-rotate-45' : 'translate-y-1.5'
                      }`}
                    ></span>
                  </div>
                </button>
              }
            </label>
          </div>

          <div
            className={`md:col-8 md:flex justify-center md:justify-end ${
              color ? 'bg-gray-200' : 'bg-gray-200 md:bg-transparent'
            } ${menu ? ' flex' : ' hidden'}`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem
                className={`${color ? 'text-black ' : 'text-black md:text-white'}`}
                href="/#gallery"
              >
                Gallery
              </NavItem>
              <NavItem
                className={`${color ? 'text-black ' : 'text-black md:text-white'}`}
                href="/#pricing"
              >
                Pricing
              </NavItem>
              <NavItem
                className={`${color ? 'text-black ' : 'text-black md:text-white'}`}
                href="/#contact"
              >
                Contact
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
