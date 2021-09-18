import React from 'react'
import EAButton from '../../../../components/Common/EAButton/EAButton'
import GAService from '../../../services/GAService'
//import './styles.scss'

const WorkshopCard = ({ workshopData }) => (
  <div className="workshop-card d-flex flex-column">
    <h3 className="text-left">{workshopData.title}</h3>
    <p>{workshopData.shortSummary}</p>
    <EAButton
      title="Czytaj więcej"
      target={`workshops/${workshopData.id}`}
      onClick={() => {
        GAService.sendWorkshopsEvent(`Details clicked - ${workshopData.title}`)
      }}
    />
  </div>
)

export default WorkshopCard
