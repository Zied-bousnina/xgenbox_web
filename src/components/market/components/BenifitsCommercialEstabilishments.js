import { faBuildingColumns, faCartShopping, faCity, faClock, faDatabase, faFunnelDollar, faMale, faPiggyBank, faQuestion, faRoad, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'reactstrap'

function BenifitsCommercialEstabilishments() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }} >
      <Col className="order-md-2" md="4" style={{ height: "50vh", backgroundSize: "cover",  }}>

        
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faMale}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
          
            <div className="text-center ct-title  " style={{ color: "#434955" }}>Less labor</div>
            <p style={{ color: "#434955", fontSize: 15,  boxShadow: 'revert',textAlign: 'center' }}>Reduce labor costs by collecting waste only when bins and receptacles are actually full.
            </p>

          
        


      </Col>
      <Col className="order-md-2" md="4" style={{ height: "50vh", backgroundSize: "cover" }}>
       
            <div className="text-center ct-title  " style={{ color: "white" }}>
              <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}

              >
                {/* <i className="ni ni-settings-gear-65" /> */}

                <FontAwesomeIcon icon={faClock}
                  style={{ width: 50, height: 50, color: "#FFFFFF" }}

                />
              </div></div>
         
          
            <div className="text-center ct-title  " style={{ color: "#434955" }}>
            Cleaner streets</div>
            <p style={{ color: "#434955", fontSize: 15, boxShadow: 'revert',textAlign: 'center'  }}>In facilities open to the public, waste collection activities can be disruptive and unsightly. Our solutions help reduce these collections or eliminate collections during peak hours altogether.</p>

         
      </Col>
      <Col className="order-md-2" md="4" style={{ height: "50vh", backgroundSize: "cover" }}>
  <div className="text-center ct-title" style={{ color: "white" }}>
    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle" style={{ width: 100, height: 100, backgroundColor: "#3C976E", marginTop:20 }}>
      <FontAwesomeIcon icon={faFunnelDollar} style={{ width: 50, height: 50, color: "#FFFFFF" }} />
    </div>
  </div>
  <div className="text-center ct-title" style={{ color: "#434955" }}>Pay less</div>
  <p style={{ color: "#434955", fontSize: 15, boxShadow: 'revert', textAlign: 'center' }}>
    Customers who use third-party services to collect their waste pay per collection, regardless of the amount of waste. Our solutions eliminate unnecessary collections.
  </p>
</Col>

      
    </Row>
  )
}

export default BenifitsCommercialEstabilishments