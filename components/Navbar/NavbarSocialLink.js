import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavbarSocialLink = ({ destination, icon }) => {
  const router = useRouter()
  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-bold uppercase text-base leading-5 text-left px-2 py-4 transition duration-300 ease-in-out hover:underline ${
        router.pathname === destination ? 'underline' : 'no-underline'
      }`}
      style={{
        textDecorationThickness: '2px',
        textUnderlineOffset: '7px',
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default NavbarSocialLink
