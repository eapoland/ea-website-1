import React from 'react'
import Row from 'reactstrap/lib/Row'
import WorkshopCard from '../WorkshopCard'
//import './styles.scss'
import workshops from '../../WorkshopDetails/content/workshops'

const WorkshopList = () => (
  <Row className="ea-row justify-content-center workshop-list">
    {workshops.map(workshop => (
      <WorkshopCard workshopData={workshop} key={workshop.id} />
    ))}
  </Row>
)

export default WorkshopList
