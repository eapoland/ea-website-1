import React from 'react'
import './styles.module.scss'
import { Col, Row } from 'reactstrap'
import Slide from 'react-reveal/Slide'

const QuoteSection = () => (
  <Row className="quote-section mx-auto">
    <Col className="quote-section__column">
      <Slide left cascade>
        <div>
          <h3>
            "Efektywny Altruizm to połączenie jasnego spojrzenia na czynienie
            dobra z naukową dokładnością."
          </h3>
          <p className="quote-section__author">- Derek Thompson</p>
        </div>
      </Slide>
    </Col>
  </Row>
)

export default QuoteSection
