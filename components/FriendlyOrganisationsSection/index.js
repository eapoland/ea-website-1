import React from 'react'
import './styles.module.scss'
import { Col, Row } from 'reactstrap'
import { Fade } from 'react-reveal'
import okLogo from '../../public/images/ok-logo.png'
import paretoLogo from '../../public/images/pareto-logo.png'
import altruistoLogo from '../../public/images/altruisto-logo.png'
import provegLogo from '../../public/images/proveg-logo.png'
import schweitzerLogo from '../../public/images/schweitzer-logo.png'

const FriendlyOrganisationsSection = () => (
  <Fade bottom>
    <Row className="friendly-section ea-row">
      <Col className="friendly-section-column text-center mx-auto">
        <h3 className="friendly-section__heading">Przyjaciele</h3>
        <div className="friendly-section__items d-flex justify-content-center align-items-center">
          <div className="friendly-section__logo">
            <a
              href="https://www.otwarteklatki.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={okLogo.src} alt="OK logo" />
            </a>
          </div>
          <div className="friendly-section__logo">
            <a
              href="https://www.schweitzer.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={schweitzerLogo.src} alt="Albert Schweitzer logo" />
            </a>
          </div>
          <div className="friendly-section__logo">
            <a
              href="https://proveg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={provegLogo.src} alt="ProVeg logo" />
            </a>
          </div>
          <div className="friendly-section__logo">
            <a
              href="https://altruisto.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={altruistoLogo.src} alt="Altruisto logo" />
            </a>
          </div>
          <div className="friendly-section__logo">
            <a
              href="https://optimumpareto.pl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paretoLogo.src} alt="Pareto logo" />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Fade>
)

export default FriendlyOrganisationsSection
