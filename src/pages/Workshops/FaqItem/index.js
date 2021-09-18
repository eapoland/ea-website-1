import React, { useState } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap'
//import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const FaqItem = ({ item }) => {
  const [collapse, setCollapse] = useState(false)

  const toggle = () => setCollapse(!collapse)

  return (
    <div>
      <Card className="faq-item">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="faq-item__title">{item.title}</h4>
            <button onClick={toggle} className="faq-item__toggle" type="button">
              <FontAwesomeIcon
                icon={collapse ? faChevronLeft : faChevronDown}
              />
            </button>
          </div>

          <Collapse isOpen={collapse}>
            <div className="faq-item__content">
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  )
}

export default FaqItem
