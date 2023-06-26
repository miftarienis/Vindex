import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent text-white text-lg font-bold uppercase"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className={`fixed w-full top-0 left-0`} style={{ zIndex: '9999' }}>
      <div className="container">
        <div className="row py-6 justify-between items-center">
          <div className="col-4">
            <Link href="/">
              <h1 className="text-white">Vindex</h1>
            </Link>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className={`fill-current  w-6 h-6`}
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
              <NavItem href="/">Gallery</NavItem>
              <NavItem href="/about">Pricing</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
