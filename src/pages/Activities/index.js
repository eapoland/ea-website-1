import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Spinner from 'reactstrap/lib/Spinner'
import './Activities.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavHashLink } from 'react-router-hash-link'
import EAButton from '../../components/Common/EAButton/EAButton'
import marcin from '../../assets/images/marcin.png'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ScrollToTop from '../../components/ScrollToTop'
import MailService from '../../services/MailService'

const Activities = () => {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('notSent')

  const handleSubmit = event => {
    setStatus('sending')
    MailService.sendContactForm(
      '',
      'kontakt@efektywnyaltruizm.org',
      email,
      'Współpraca - formularz kontaktowy',
      msg
    ).then(() => {
      MailService.sendContactFormAck(
        '',
        email,
        'Współpraca - formularz kontaktowy',
        msg
      ).then(result => {
        if (result.status === 200) {
          setStatus('sent')
        }
      })
    })
    event.preventDefault()
  }

  return (
    <div className="activities">
      <ScrollToTop />
      <SectionTitle title="Nasze działania" text="Współpraca i doradztwo" />
      <Row
        className="activities__cta ea-row justify-content-center"
        id="companies"
      >
        <Col
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: '683px' }}
        >
          <h2>Współpraca z&nbsp;organizacjami</h2>
          <p>
            Prowadzisz firmę lub organizację pozarządową? Porozmawiajmy o tym,
            jak powiększyć Twój dobroczynny ślad, lub społeczną
            odpowiedzialność!
          </p>
        </Col>
        <Col
          className="d-flex flex-column justify-content-center"
          style={{ maxWidth: '683px' }}
        >
          {status === 'sent' ? (
            <h3>Wiadomość została wysłana</h3>
          ) : (
            <>
              <input
                type="email"
                placeholder="Adres e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <textarea
                placeholder="Wiadomość"
                value={msg}
                onChange={event => setMsg(event.target.value)}
              />
              <button
                type="submit"
                className="btn ea-button"
                onClick={handleSubmit}
                style={{ width: '10rem' }}
                disabled={status === 'sending'}
              >
                Wyślij
              </button>
              {status === 'sending' && (
                <span>
                  <Spinner size="sm" /> Trwa wysyłanie wiadomości...
                </span>
              )}
            </>
          )}
        </Col>
      </Row>
      <Row className="ea-row">
        <Col className="activities__col--narrow">
          <h3>Szkolenia i warsztaty</h3>
          <p className="activities__paragraph">
            Na Twoje{' '}
            <a href="mailto:kontakt@efektywnyaltruizm.org">zamówienie</a>{' '}
            przygotujemy treści dostosowane do potrzeb Twojej organizacji.
          </p>
          <div className="d-flex justify-content-center">
            <EAButton
              title="Zapoznaj się z ofertą warsztatową"
              target="workshops"
            />
          </div>
        </Col>
      </Row>
      <Row className="activities__advisory ea-row">
        <Col>
          <h3>Doradztwo</h3>
          <Row className="justify-content-center ea-row">
            <Col style={{ maxWidth: '683px' }}>
              <img src={marcin} alt="" />
            </Col>
            <Col
              className="d-flex flex-column justify-content-center"
              style={{ maxWidth: '683px' }}
            >
              <h5>Marcin Tischner</h5>
              <p>
                Porozmawiajmy o metodach, które pozwolą Twojej organizacji
                osiągnąć największy dobroczynny zwrot lub wzmocnić swoją
                odpowiedzialność społeczną.
              </p>
              <a href="mailto:marcin.tischner@efektywnyaltruizm.org">
                <button
                  type="button"
                  className="btn ea-button"
                  style={{ width: '10rem' }}
                >
                  Napisz do mnie
                </button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="ea-row" id="media">
        <Col className="activities__col--narrow">
          <h3>Media</h3>
          {/* <p className="activities__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p> */}
          <div className="activities__media--links d-flex justify-content-between">
            <NavHashLink to="about">
              <button className="activities__media--btn" type="button">
                <div className="d-flex justify-content-between align-items-center">
                  <p>O fundacji</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="activities__media--icon"
                  />
                </div>{' '}
              </button>
            </NavHashLink>
            <a
              href="https://drive.google.com/drive/folders/10TgWw_2vMKzcbRUn1HpMsqgmwoW9Dy0l?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="activities__media--btn" type="button">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Materiały</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="activities__media--icon"
                  />
                </div>{' '}
              </button>
            </a>
            <NavHashLink to="contact">
              <button className="activities__media--btn" type="button">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Kontakt</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="activities__media--icon"
                  />
                </div>{' '}
              </button>
            </NavHashLink>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Activities
