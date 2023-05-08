import { faBuildingColumns, faCartShopping, faCity, faDatabase, faMale, faPiggyBank, faQuestion, faRoad, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'reactstrap'

function BenefitsSmartCities() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }} >
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover",  }}>

        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center d-flex align-items-center" >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faMale}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>Less manpower</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Save on labor costs by streamlining and optimizing waste management operations. Less frequent collections and less inefficient collections (visiting empty bins).
            </p>

          </Col>
        </Row>


      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center d-flex align-items-center" >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faRoad}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>
              Increased transparency</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is.</p>

          </Col>
        </Row>
      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center d-flex align-items-center" >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faDatabase}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>Increased transparency</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Historical data provides the foundation for predictive analytics and insights that not only improve operations, but let you see exactly what you’re spending and how effective it is.</p>

          </Col>
        </Row>
      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center d-flex align-items-center" >
            <div className="text-center ct-title  " style={{ color: "#434955" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faPiggyBank}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>
              Do more with less</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Cities can reduce waste collection costs by up to 50% with our smart IoT-based hardware and software solution.</p>

          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BenefitsSmartCities