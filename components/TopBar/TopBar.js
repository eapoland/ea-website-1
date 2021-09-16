import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './TopBar.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
} from 'reactstrap'

import { NavHashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { ReactComponent as WhiteLogo } from '../../assets/images/efektywny-altruizm-logo-white.svg'
import { ReactComponent as Logo } from '../../assets/images/efektywny-altruizm-logo.svg'
import GAService from '../../services/GAService'

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  const location = useLocation()

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <Navbar
        expand="lg"
        // className={`p-0 main-nav ${
        //   ((location.pathname !== "/" && !location.pathname.includes("/blog")) || scrolled) &&
        //   "main-nav--scrolled"
        // }`}
        className={`p-0 main-nav ${
          ((location.pathname !== '/' && location.pathname !== '/blog') ||
            scrolled) &&
          'main-nav--scrolled'
        }`}
        fixed="top"
      >
        <NavbarBrand tag={Link} to="/" className="main-nav__brand">
          {/* {(location.pathname !== "/" && !location.pathname.includes("/blog")) || scrolled ? (
            <Logo style={{ height: "60px" }}></Logo>
          ) : (
            <WhiteLogo style={{ height: "60px" }}></WhiteLogo>
          )} */}
          {(location.pathname !== '/' && location.pathname !== '/blog') ||
          scrolled ? (
            <Logo className="main-nav__logo" />
          ) : (
            <WhiteLogo className="main-nav__logo" />
          )}
        </NavbarBrand>
        <NavbarToggler className="main-nav__toggler" onClick={toggle}>
          <FontAwesomeIcon icon={faBars} className="main-nav__icon" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar className="main-nav__nav justify-content-center">
            <NavHashLink
              to="/about"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              O&nbsp;nas
            </NavHashLink>
            <NavHashLink
              to="/activities"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              Działania
            </NavHashLink>
            <NavHashLink
              to="/workshops"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              Warsztaty
            </NavHashLink>
            <NavHashLink
              to="/act"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              Wspieraj
            </NavHashLink>
            <NavHashLink
              to="/blog"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavHashLink>
            <NavHashLink
              to="/contact"
              className="main-nav__item"
              activeClassName="main-nav__item--active"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </NavHashLink>
            <div className="d-flex justify-content-center">
              <div className="main-nav__item main-nav__item--social">
                <a
                  href="https://www.facebook.com/efektywnyaltruizmfundacja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="main-nav__icon"
                  />
                </a>
              </div>
              <div className="main-nav__item main-nav__item--social">
                <a
                  href="https://www.linkedin.com/company/efektywnyaltruizm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="main-nav__icon"
                  />
                </a>
              </div>
              <div className="main-nav__item main-nav__item--social">
                <a
                  href="https://www.youtube.com/channel/UCj6HkTu_5nYypCRKc-7y27A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="main-nav__icon"
                  />
                </a>
              </div>
            </div>
          </Nav>
        </Collapse>

        <div className="main-nav__button--wrapper">
          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FFLJ8KDN5CAUA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              GAService.sendDonationEvent('Top bar donate button clicked')
            }}
          >
            <Button className="main-nav__button">
              <span className="main-nav__donate--xl">Przekaż darowiznę</span>
              <span className="main-nav__donate--mobile">
                <FontAwesomeIcon icon={faHeart} className="main-nav__icon" />
                &nbsp;&nbsp;Wesprzyj
              </span>
            </Button>
          </a>
        </div>
      </Navbar>
    </div>
  )
}

export default TopBar
