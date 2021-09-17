import React from 'react'
import Link from 'next/link'
import Button from 'reactstrap/lib/Button'
import './EAButton.module.scss'

const EAButton = ({ title, target, customClass, onClick, size }) => (
  <Link href={target ? target : '#'}>
    <a>
      <Button
        className={`ea-button ${customClass} text-center text-white bg-primary px-6 py-3.5 border-0 rounded-none uppercase text-base font-sans font-bold`}
        onClick={onClick}
        style={
          size
            ? {
                width: `${size}rem`,
              }
            : {
                width: '10rem',
              }
        }
      >
        {title}
      </Button>
    </a>
  </Link>
)

export default EAButton
