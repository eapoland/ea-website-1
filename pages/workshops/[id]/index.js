import Col from 'reactstrap/lib/Col'
import Row from 'reactstrap/lib/Row'
import ScrollToTop from '../../../components/ScrollToTop'
import SectionTitle from '../../../components/SectionTitle'
import workshops, { getAllWorkshopIds } from '../../../content/workshops'
import WorkshopForm from '../../../src/pages/WorkshopDetails/WorkshopForm'

export async function getStaticPaths() {
  const paths = getAllWorkshopIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const workshopDetails = workshops.find(w => w.id === parseInt(params.id))
  return {
    props: {
      workshopDetails,
    },
  }
}

const WorkshopDetails = ({ workshopDetails }) => {
  return (
    <div className="workshop-details">
      <ScrollToTop />
      <SectionTitle
        text="Warsztaty i szkolenia"
        title={workshopDetails.title}
      />
      <Row className="justify-content-center ea-row ">
        <Col
          className="workshop-details__summary"
          style={{ maxWidth: '683px' }}
        >
          <p>{workshopDetails.summary}</p>
        </Col>
        <Col
          className="workshop-details__pricing"
          style={{ maxWidth: '683px' }}
        >
          <div style={{ marginBottom: '37px' }}>
            <div className="d-flex">
              <p className="workshop-details__pricing--title">DLA</p>
              <p className="workshop-details__pricing--content">
                {workshopDetails.audience}
              </p>
            </div>
            {/* <div className="d-flex">
              <p className="workshop-details__pricing--title">LIMIT</p>
              <p className="workshop-details__pricing--content">{workshopDetails.limit}</p>
            </div> */}
            <div className="d-flex">
              <p className="workshop-details__pricing--title">CZAS</p>
              <p className="workshop-details__pricing--content">
                {workshopDetails.duration}
              </p>
            </div>
            {/* <div className="d-flex">
              <p className="workshop-details__pricing--title">CENA</p>
              <p className="workshop-details__pricing--content">{workshopDetails.price}</p>
            </div> */}
          </div>
          {/* <EAButton title="Zapytaj o szkolenie" size="180" /> */}
        </Col>
      </Row>
      {workshopDetails.hosts && (
        <Row className="ea-row workshop-details__host">
          <Col>
            <h1>Prowadzący</h1>
            {workshopDetails.hosts.map(host => (
              <Row key={host.name} className="justify-content-center">
                <Col
                  className="workshop-details__host--photo"
                  style={{ maxWidth: '683px' }}
                >
                  <img src={host.photo} alt="" />
                </Col>
                <Col
                  className="workshop-details__host--desc"
                  style={{ maxWidth: '683px' }}
                >
                  <h3>{host.name}</h3>
                  <p>{host.desc}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      )}
      {workshopDetails.modules && (
        <Row className="workshop-details__modules ea-row flex-column align-items-center">
          <h1>Spis modułów</h1>
          <div className="workshop-details__modules--list">
            <ol>
              {workshopDetails.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ol>
          </div>
        </Row>
      )}
      <Row className="workshop-details__cta ea-row justify-content-center">
        <Col
          className="d-flex align-items-center"
          style={{ maxWidth: '683px' }}
        >
          <p>Chcesz wiedzieć więcej? Użyj formularza kontaktowego</p>
        </Col>
        <Col className="workshop-details__cta--form d-flex flex-column justify-content-center">
          <WorkshopForm name={workshopDetails.title} />
        </Col>
      </Row>
    </div>
  )
}

export default WorkshopDetails
