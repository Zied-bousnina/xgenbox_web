import { faBuildingColumns, faCartShopping, faChartLine, faCity, faDatabase, faMale, faPiggyBank, faQuestion, faRoad, faTrash, faTruck, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'reactstrap'

function BenifitsWastCollector() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }} >
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover",  }}>

        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center" >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faTrash}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>Asset management​</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Keep track of where your bins are using GPS location, what their status is, detect fires or physical damage, and more.
            </p>

          </Col>
        </Row>


      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center " >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faChartLine}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>
            Increase efficiency​</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Ensure your collection routes are optimized and planned for the most profitable operations.</p>

          </Col>
        </Row>
      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center " >
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faTruckMoving}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>Fleet management</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>Monitor and analyze everything from location and collection performance to fuel consumption and braking patterns. Reduce the maintenance and operating costs of your fleet.</p>

          </Col>
        </Row>
      </Col>
      <Col className="order-md-2" md="6" style={{ height: "50vh", backgroundSize: "cover" }}>
        <Row className="row-grid align-items-center justify-items-center ">
          <Col md="6" className="text-center " >
            <div className="text-center ct-title  " style={{ color: "#434955" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faMale}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          </Col>
          <Col md="6 ">
            <div className="text-align ct-title  " style={{ color: "#434955" }}>
              
Reduce labor costs</div>
            <p style={{ color: "#434955", fontSize: 15, fontWeight: 'bolder', boxShadow: 'revert' }}>By increasing the capacity of standard bins and reducing the number of collections required, you save on the basic labor costs that take up a large part of operating budgets.</p>

          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BenifitsWastCollector