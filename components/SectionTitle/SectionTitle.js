import React from 'react'
import './SectionTitle.scss'

const SectionTitle = ({ text, title }) => (
  <div className="section-title d-flex flex-column justify-content-center">
    <h5 className="text-center">{text}</h5>
    <h1>{title}</h1>
  </div>
)

export default SectionTitle
