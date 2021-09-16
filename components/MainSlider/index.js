import React from 'react'
import Slider from 'react-slick'
import { Row, Col } from 'reactstrap'
import EAButton from '../Common/EAButton/EAButton'
import './styles.module.scss'

const MainSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    className: 'd-flex align-items-center',
    dots: true,
    arrows: false,
  }
  return (
    <Row className="main-slider ea-row">
      <Col className="recommended-slider-column ea-col text-center mx-auto">
        <Slider {...settings}>
          <div className="d-flex flex-column justify-content-center align-items-start main-slider__item main-slider__item--first">
            <h2 className="text-white">
              Jak przynieść światu <br />
              <b>najwięcej dobra?</b>
            </h2>
            <p className="text-white">
              Jak czynić najwięcej dobra wykorzystując ograniczone środki?
              <br /> Efektywny Altruizm szuka odpowiedzi na to pytanie.
            </p>
            <EAButton title="Dowiedz się więcej" size={160} target="about" />
          </div>
          {/* <div className="main-slider__item main-slider__item--second">TEST2</div> */}
        </Slider>
      </Col>
    </Row>
  )
}

export default MainSlider
