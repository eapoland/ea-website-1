import React from 'react'

const SectionTitle = ({ text, title }) => (
  <div className="flex flex-col justify-center pt-48 pb-24">
    <h5 className="text-center">{text}</h5>
    <h1>{title}</h1>
  </div>
)

export default SectionTitle
