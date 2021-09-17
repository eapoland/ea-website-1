import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import eaLogoWhite from '../../public/images/efektywny-altruizm-logo-white.svg'
import eaLogo from '../../public/images/efektywny-altruizm-logo.svg'
import GAService from '../../src/services/GAService'
import NavbarLink from './NavbarLink'
import NavbarSocialLink from './NavbarSocialLink'

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isTransparent, setTransparent] = useState(true)

  const toggle = () => setExpanded(!isExpanded)
  const location = useRouter()

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  const shouldBeTransparent = () => {
    return (
      (location.pathname == '/' || location.pathname == 'blog') && !scrolled
    )
  }

  useEffect(() => {
    setTransparent(shouldBeTransparent())
    window.addEventListener('scroll', handleScroll)
  })
  return (
    <nav
      className={`z-50 fixed w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl
      h-28 lg:h-20 mx-auto flex items-center justify-between flex-wrap bg-teal-500 p-0 transition duration-500 ${
        isTransparent ? 'bg-transparent' : 'bg-white'
      } transition duration-500`}
    >
      <div className="block lg:hidden">
        <button
          className={`flex items-center justify-center h-28 w-28 px-3 py-2 rounded-none ${
            isTransparent ? 'text-white' : 'text-black'
          } text-xs font-bold uppercase font-sans`}
          onClick={toggle}
        >
          <svg
            className="fill-current h-10 w-10"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center flex-shrink-0 text-white mr-6 ml-4">
        <Link href="/">
          <a className="relative w-52 h-16 md:w-40 md:h-12">
            <Image
              src={isTransparent ? eaLogoWhite : eaLogo}
              alt="Logo Efektywnego Altruizmu"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div
        className={`w-full block lg:flex lg:w-auto justify-center ${
          isExpanded ? ' flex' : ' hidden'
        } bg-secondary ${isTransparent ? 'lg:bg-transparent' : 'lg:bg-white'}
        order-last lg:order-none transition duration-500 ease-in py-4
          `}
      >
        <div
          className={`text-sm flex lg:flex-grow justify-center flex-col lg:flex-row items-center text-white ${
            isTransparent ? 'lg:text-white' : 'lg:text-black'
          }`}
        >
          <NavbarLink destination="/about" title="O nas" />
          <NavbarLink destination="/activities" title="Działania" />
          <NavbarLink destination="/workshops" title="Warsztaty" />
          <NavbarLink destination="/act" title="Wspieraj" />
          <NavbarLink destination="/blog" title="Blog" />
          <NavbarLink destination="/contact" title="Kontakt" />
          <div>
            <NavbarSocialLink
              destination="https://www.facebook.com/efektywnyaltruizmfundacja"
              icon={faFacebookSquare}
            />
            <NavbarSocialLink
              destination="https://www.linkedin.com/company/efektywnyaltruizm/"
              icon={faLinkedinIn}
            />
            <NavbarSocialLink
              destination="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
              icon={faYoutube}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <a
          href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
          className="p-8 bg-accent text-black text-xs w-full h-full font-bold uppercase font-sans"
          onClick={() => {
            GAService.sendDonationEvent('Navbar donate button clicked')
          }}
        >
          Przekaż darowiznę
        </a>
      </div>
      <div className="block lg:hidden">
        <a
          href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
          onClick={() => {
            GAService.sendDonationEvent('Navbar donate button clicked')
          }}
        >
          <button className="h-28 w-28 px-3 py-2 rounded-none bg-accent hover:text-white text-black text-xs font-bold uppercase font-sans">
            <FontAwesomeIcon icon={faHeart} /> Wesprzyj
          </button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
