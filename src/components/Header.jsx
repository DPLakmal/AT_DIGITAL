import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="bg-primary_color flex items-center justify-between h-20 px-5 sm:py-4 py-0 lg:px-20 md:px-10">
      <Logo />
      {/* Hamburger Menu Button */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white text-4xl">
          <FiMenu />
        </button>
      </div>
      {/* Navigation Links */}
      <nav className="hidden sm:flex flex-row items-center sm:space-x-4 md:space-x-7 ">
        <Link to="/services" className="text-sm text-white">
          SERVICES
        </Link>
        <Link to="/about" className="text-sm text-white">
          ABOUT US
        </Link>
        <Link to="/contact" className="text-sm text-white">
          CONTACT US
        </Link>
        <Link to="/careers" className="text-sm text-white">
          CAREERS
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 flex flex-col items-start p-5 transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-full' : '-translate-x-0'
        }`}
      >
        <div className="flex flex-row w-full  justify-between">
          <div className="flex flex-col space-y-8">
            <Link to="/" className="text-base text-black" onClick={toggleMenu}>
              HOME
            </Link>
            <Link to="/services" className="text-base text-black" onClick={toggleMenu}>
              SERVICES
            </Link>
            <Link to="/about" className="text-base text-black" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <Link to="/contact" className="text-base text-black" onClick={toggleMenu}>
              CONTACT US
            </Link>
            <Link to="/careers" className="text-base text-black" onClick={toggleMenu}>
              CAREERS
            </Link>
          </div>
          <button onClick={toggleMenu} className="self-start text-black text-4xl">
            <FiX />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
