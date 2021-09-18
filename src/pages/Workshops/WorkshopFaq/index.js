import React from 'react'
import FaqItem from '../FaqItem'
//import './styles.scss'
import faq from '../content/faq'

const WorkshopFaq = () => (
  <div className="workshops-faq">
    <h3>FAQ - Pytania i odpowiedzi</h3>
    {faq.map(item => (
      <FaqItem item={item} key={item.title} />
    ))}
  </div>
)

export default WorkshopFaq
