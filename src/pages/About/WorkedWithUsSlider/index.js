import React from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import './styles.module.scss'

const WorkedWithUsSlider = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: true,
    className: 'd-flex align-items-center',
    dots: true,
    prevArrow: (
      <FontAwesomeIcon icon={faChevronLeft} className="ea-slider__arrow" />
    ),
    nextArrow: (
      <FontAwesomeIcon icon={faChevronRight} className="ea-slider__arrow" />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...sliderSettings} className="about__team--slider">
      <div>
        <div>
          <h5>Marcin Kowrygo</h5>
          <p>
            Neurobiolog, popularyzator otwartej i efektywnej nauki, główny
            strateg polskiej społeczności.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>Agnieszka Pisz</h5>
          <p>
            Projektantka usług i interakcji. Skupia się na rozwiązaniach, które
            polepszają jakość życia ludzi i ich otoczenia.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>Marcin Wosinek</h5>
          <p>Programista.</p>
        </div>
      </div>
      <div>
        <div>
          <h5>Karolina Sarek</h5>
          <p>
            Współzałożycielka i Dyrektor Badań w Charity Entrepreneurship Fund
            Manager at Effective Altruism Animal Welfare Fund.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5>Daniel Wyrzykowski</h5>
          <p>
            Twórca Altruisto.com - aplikacji do zbiórki funduszy dla organizacji
            charytatywnych podczas zakupów online.
          </p>
        </div>
      </div>
    </Slider>
  )
}

export default WorkedWithUsSlider
