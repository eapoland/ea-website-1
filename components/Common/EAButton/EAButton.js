import React from 'react'
import { Link } from 'next/link'
import Button from 'reactstrap/lib/Button'
import './EAButton.module.scss'

const EAButton = ({ title, target, customClass, onClick }) => (
  //<Link href={`${target}`}>
  //<a>
  <Button
    className={`ea-button ${customClass}`}
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
