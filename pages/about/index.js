import React from 'react'
import { Row, Col } from 'reactstrap'
import ScrollToTop from '../../components/ScrollToTop'
import SectionTitle from '../../components/SectionTitle'
// './styles.scss'
import teamMembers from '../../src/pages/About/content/teamMembers'
import consultants from '../../src/pages/About/content/consultants'
import MemberCard from '../../src/pages/About/MemberCard'
import ConsultantCard from '../../src/pages/About/ConsultantCard'
import WorkedWithUsSlider from '../../src/pages/About/WorkedWithUsSlider'
import fields from '../../content/fields'
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs/Tab'

const About = () => (
  <>
    <ScrollToTop />
    <SectionTitle text="O nas" title="Czym jest Efektywny Altruizm?" />
    <section className="bg-accent flex flex-col md:flex-row-reverse">
      <div className="bg-about-intro bg-cover bg-center h-120 md:h-auto w-full md:w-1/2"></div>
      <div className="flex flex-col justify-center w-full py-20 px-10 lg:py-40 lg:px-20 md:w-1/2">
        <h3 className="text-left">
          ,,Jak przynieść światu
          <br />
          najwięcej dobra?”
        </h3>
        <p>
          Jesteśmy polską gałęzią międzynarodowego ruchu Effective Altruism, od
          2013 roku kształtowanego przez ludzi, których pragnieniem jest{' '}
          <b>czynić najwięcej dobra</b>. Kluczowe dla naszej działalności jest
          odwołanie do dowodów naukowych i starannego rozumowania – wierzymy, że
          to najlepszy sposób, by identyfikować zaniedbane obszary
          dobroczynności i priorytetyzować działania w ich obrębie.
        </p>
      </div>
    </section>
    <section></section>
    <Row className="about__fields">
      <Col>
        <div className="about__fields--intro">
          <h3 className="text-center">Obszary działania</h3>
          <p>
            Wybierając obszary, które traktujemy priorytetowo kierujemy się
            kilkoma wskaźnikami:
            <ul>
              <li>
                <b>skala</b> – czy dany problem jest rozległy?
              </li>
              <li>
                <b>zaniedbania</b> – czy dany problem jest zaniedbany?
              </li>
              <li>
                <b>wykonalności</b> – czy i jakim kosztem jesteśmy w stanie coś
                z tym zrobić?
              </li>
            </ul>
          </p>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top">
          {fields.map(field => (
            <Tab field={field} key={field.key} />
          ))}
        </Tabs>
      </Col>
    </Row>
    <Row className="about__work">
      <Col sm={6} />
      <Col sm={6}>
        <h3>Jak działamy w Polsce?</h3>
        <p>
          Naszym celem jest budowanie w Polsce świadomości istotnych, lecz
          zaniedbanych obszarów działalności dobroczynnej, a przy tym kultury
          efektywnej filantropii.
        </p>
        <p>
          Jesteśmy gałęzią międzynarodowego ruchu Effective Altruism.
          Popularyzujemy wiedzę naukową (badaczy jak Daniel Kahneman, Barbara
          Oakley) i namysł filozoficzny (czołowych myślicieli jak Derek Parfit,
          lub Peter Singer) dotyczące dobroczynności.
        </p>
        <p>
          Podczas naszych spotkań przyglądamy zarówno teoretycznym, jak i
          praktycznym aspektom czynienia dobra. Zadajemy pytania ekspertom.
          Wspólnie z nimi edukujemy w zakresie podstaw i dobrych praktyk
          dobroczynności. Łączymy ludzi i organizacje w Polsce i na świecie.
        </p>
        <p>
          Prowadzimy zbiórki na rzecz najefektywniejszych organizacji
          dobroczynnych rekomendowanych przez ewaluatorów GiveWell oraz Animal
          Charity Evaluators. Prowadzimy też działalność badawczą badawczą w
          zakresie priorytetów dobroczynnych dla Polski i Europy
          Środkowo-Wschodniej.
        </p>
      </Col>
    </Row>
    <Row className="about__team">
      <Col>
        <h3 className="text-center">Nasz zespół</h3>
        <div className="d-flex flex-wrap justify-content-center about__team--list">
          {teamMembers.map(member => (
            <MemberCard key={member.name} teamMember={member} />
          ))}
        </div>
      </Col>
    </Row>
    {/* <Row className="about__consultants">
      <Col>
        <h3 className="text-center">Doradzają nam</h3>
        <div className="d-flex flex-wrap justify-content-center about__team--consultants">
          {consultants.map(member => (
            <ConsultantCard key={member.name} consultant={member} />
          ))}
        </div>
      </Col>
    </Row>
    <Row className="about__team about__ex">
      <Col>
        <h3 className="text-center">Pracowali z nami</h3>
        <WorkedWithUsSlider />
      </Col>
    </Row> */}
  </>
)

export default About
