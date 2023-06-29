import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

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
      className={`fixed w-full top-0 left-0 ${color ? 'bg-gray-200' : 'bg-transparent'}`}
      style={{ zIndex: '9999' }}
    >
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-4">
            <Link href="/">
              <Image src="/img/logo.png" width={220} height={123} alt="logo" />
            </Link>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className={`fill-current  ${color ? 'text-black' : 'text-black'} w-6 h-6`}
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-8 md:flex justify-center md:justify-end bg-white md:bg-transparent ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem className={`${color ? 'text-black ' : 'text-white md:text-white'}`} href="/">
                Gallery
              </NavItem>
              <NavItem
                className={`${color ? 'text-black ' : 'text-white md:text-white'}`}
                href="/about"
              >
                Pricing
              </NavItem>
              <NavItem
                className={`${color ? 'text-black ' : 'text-white md:text-white'}`}
                href="/contact"
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
