// import { faFacebookSquare, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { ReactComponent as WhiteLogo } from '../../assets/images/efektywny-altruizm-logo-white.svg'
import './Footer.scss'

const Footer = () => (
  <Row className="footer ea-row">
    <Col className="footer__column">
      <div
        className="d-flex align-items-center"
        style={{ marginBottom: '24px' }}
      >
        <WhiteLogo className="main-nav__logo footer__logo" />
        {/* <div className="main-nav__item main-nav__item--social">
            <a href="https://www.facebook.com/efektywnyaltruizmfundacja">
              <FontAwesomeIcon icon={faFacebookSquare} className="main-nav__icon" />
            </a>
          </div>
          <div className="main-nav__item main-nav__item--social">
            <a href="https://www.linkedin.com/company/efektywnyaltruizm/">
              <FontAwesomeIcon icon={faLinkedinIn} className="main-nav__icon" />
            </a>
          </div>
          <div className="main-nav__item main-nav__item--social">
            <a href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A">
              <FontAwesomeIcon icon={faYoutube} className="main-nav__icon" />
            </a>
          </div> */}
      </div>
      <div>
        <Nav className="footer__nav flex-row align-items-end">
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/about">
              O NAS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/activities">
              DZIAŁANIA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/workshops">
              WARSZTATY
            </NavLink>
          </NavItem>
          {/* <NavItem>
              <NavLink className="footer__item" tag={Link} to="/blog">
                BLOG
              </NavLink>
            </NavItem> */}
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/act">
              WSPIERAJ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/contact">
              KONTAKT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="footer__item" tag={Link} to="/privacy-policy">
              POLITYKA PRYWATNOŚCI
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="footer__item"
              href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
            >
              MATERIAŁY DLA MEDIÓW
            </NavLink>
          </NavItem>
        </Nav>
        <p className="footer__text">© 2021 Fundacja Efektywny Altruizm</p>
      </div>
    </Col>
    <Col className="footer__column">
      <h4>Adres</h4>
      <p className="footer__text" style={{ lineHeight: '26px' }}>
        Fundacja Efektywny Altruizm <br />
        Plac Bankowy 2, 00-095 Warszawa <br />
        KRS: 0000726237, REGON: 369951399, NIP: 5252746902 <br />
        ING Bank Śląski S.A. <br />
        Nr konta: PL 67 1050 1012 1000 0090 8040 3265
      </p>
    </Col>
  </Row>
)

export default Footer
