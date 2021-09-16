import React from 'react'
import { Link } from 'next/link'
import Button from 'reactstrap/lib/Button'
import './EAButton.module.scss'

const EAButton = ({ title, target, customClass, onClick }) => (
  //<Link href={`${target}`}>
  //<a>
  <Button
    className={`ea-button ${customClass} text-center text-white bg-secondary px-6 py-3.5 border-0 rounded-none uppercase font-sans font-bold`}
    onClick={onClick}
    // style={
    //   // size
    //   //   ? {
    //   //       width: `${size}px`,
    //   //     }
    //   //   : {
    //   //       width: "120px",
    //   //     }
    // }
  >
    {title}
  </Button>
  //</a>
  //</Link>
)

export default EAButton
