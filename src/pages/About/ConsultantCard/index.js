import React from 'react'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ConsultantCard = ({ consultant }) => (
  <div
    className={`about__team--person about__team--consultant-${consultant.id}`}
  >
    <div className="about__team--details">
      <Row>
        <Col sm={9}>
          <h5>{consultant.name}</h5>
        </Col>
        <Col sm={3} className="d-flex">
          <a
            href={consultant.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a
            href={`mailto:${consultant.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </Col>
      </Row>
      <p>{consultant.desc}</p>
    </div>
  </div>
)

export default ConsultantCard
