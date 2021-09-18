import React from 'react'
//import './styles.scss'
import { Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import EAButton from '../../../../components/Common/EAButton/EAButton'
import workshops from '../../../../content/workshops'
import GAService from '../../../services/GAService'

const PromotedWorkshop = () =>
  workshops
    .filter(workshop => workshop.recommended)
    .map(item => (
      <div
        className="promoted-workshop d-flex justify-content-end align-items-center"
        key={item.id}
      >
        <Col sm={5}>
          <h5>
            <FontAwesomeIcon icon={faStar} />
            &nbsp;&nbsp;polecamy
          </h5>
          <h3 className="text-left">{item.title}</h3>
          <p>{item.shortSummary}</p>
          <EAButton
            title="Czytaj więcej"
            target={`workshops/${item.id}`}
            onClick={() => {
              GAService.sendWorkshopsEvent(`Details clicked - ${item.title}`)
            }}
          />
        </Col>
      </div>
    ))

export default PromotedWorkshop
