import React from 'react'
import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './styles.module.scss'

const MemberCard = ({ teamMember }) => (
  <div className={`about__team--person about__team--person-${teamMember.id}`}>
    <div className="about__team--details">
      <Row>
        <Col sm={9}>
          <h5>{teamMember.name}</h5>
        </Col>
        <Col sm={3} className="d-flex">
          <a
            href={teamMember.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          </a>
          <a
            href={`mailto:${teamMember.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
          </a>
        </Col>
      </Row>
      <p>{teamMember.position}</p>
      <p className="about__team--desc">{teamMember.desc}</p>
    </div>
  </div>
)

export default MemberCard
