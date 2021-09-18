import React from 'react'
import './styles.module.scss'
import { Col, Row } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import EAButton from '../Common/EAButton/EAButton'

const ContentPreviewSection = ({ reversed, content }) => (
  <Fade bottom cascade>
    <Row
      className={`content-preview-section mx-auto${
        reversed ? ' flex-row-reverse' : ' flex-row'
      } justify-content-center`}
    >
      <Col
        xs={6}
        className="content-preview-section__column content-preview-section__info"
      >
        <h3>{content.heading}</h3>
        <p>{content.text}</p>
        <EAButton
          customClass="content-preview-section__button"
          title={content.cta}
          target={content.page}
        />
      </Col>
      <Col xs={6} className="content-preview-section__column">
        <img src={content.img.src} alt={content.imgAlt} />
      </Col>
    </Row>
  </Fade>
)

export default ContentPreviewSection
