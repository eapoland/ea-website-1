import React from 'react'
import Row from 'reactstrap/lib/Row'
import ScrollToTop from '../../components/ScrollToTop'
import SectionTitle from '../../components/SectionTitle'
import PromotedWorkshop from '../../src/pages/Workshops/PromotedWorkshop'
import WorkshopList from '../../src/pages/Workshops/WorkshopList'
import WorkshopFaq from '../../src/pages/Workshops/WorkshopFaq'
//import './styles.scss'

const Workshops = () => (
  <>
    <ScrollToTop />
    <Row className="flex-column align-items-center ea-row">
      <SectionTitle
        title="Warsztaty i szkolenia"
        text="Zapoznaj się z naszą ofertą"
      />
      <PromotedWorkshop />
      <WorkshopList />
      {/* <Testimonials /> */}
      <WorkshopFaq />
    </Row>
  </>
)

export default Workshops
