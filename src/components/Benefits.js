import { faBuildingColumns, faCartShopping, faCity, faQuestion, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'reactstrap'

function Benefits() {
  return (
    <Row className="row-grid align-items-center" style={{ margin: 20 }} >
  <Col className="order-md-2" md="6" style={{backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/smartcity-logistica02-scaled.jpg')`, height: "50vh",  backgroundSize: "cover", }}>
    
  <Row className="row-grid align-items-center justify-items-center ">
      <Col md="6" className="text-center d-flex align-items-center" >
      <div className="text-center ct-title  " style={{color:"white"}}>
        <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{width:100, height:100}}
        
        >
                      {/* <i className="ni ni-settings-gear-65" /> */}

                      <FontAwesomeIcon icon={faCity}
                      style={{width:50, height:50, color:"#FFFFFF"}}

                        />
                    </div></div>
      </Col>
      <Col md="6">
      <div className="text-align ct-title  " style={{color:"white"}}>Smart cities</div>
      <p style={{color:"white", fontSize:15, fontWeight:'bolder', boxShadow:'revert'}}>In smart cities, smart traffic, smart lighting, and smart energy are all part of the picture, and smart waste management is an integral part of any smart city. Our offerings are fully stacked and vertically integrated so that everyone can see and feel the direct benefits of using our solution.
        </p>

      </Col>
    </Row>
    

  </Col>
  <Col className="order-md-2" md="6" style={{backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/3D_Architectural_Rendering_of_Commercial_Shopping_Mall_1366x768.jpg')`,height: "50vh",  backgroundSize: "cover"}}>
  <Row className="row-grid align-items-center justify-items-center ">
      <Col md="6" className="text-center d-flex align-items-center" >
      <div className="text-center ct-title  " style={{color:"white"}}>
        <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{width:100, height:100}}
        
        >
                      {/* <i className="ni ni-settings-gear-65" /> */}

                      <FontAwesomeIcon icon={faCartShopping}
                      style={{width:50, height:50, color:"#FFFFFF"}}

                        />
                    </div></div>
      </Col>
      <Col md="6">
      <div className="text-align ct-title  " style={{color:"white"}}>
Commercial establishments</div>
      <p style={{color:"white", fontSize:15, fontWeight:'bolder', boxShadow:'revert'}}>Whether it’s a shopping center, convention center, airport, or office complex, XGENBOX’s waste management solutions have helped customers save millions of dollars by reducing the cost of their waste management operations.</p>

      </Col>
    </Row>
  </Col>
  <Col className="order-md-2" md="6" style={{backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/488557-theme_parks-nature.jpg')`,height: "50vh",  backgroundSize: "cover"}}>
  <Row className="row-grid align-items-center justify-items-center ">
      <Col md="6" className="text-center d-flex align-items-center" >
      <div className="text-center ct-title  " style={{color:"white"}}>
        <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{width:100, height:100}}
        
        >
                      {/* <i className="ni ni-settings-gear-65" /> */}

                      <FontAwesomeIcon icon={faBuildingColumns}
                      style={{width:50, height:50, color:"#FFFFFF"}}

                        />
                    </div></div>
      </Col>
      <Col md="6">
      <div className="text-align ct-title  " style={{color:"white"}}>Private organizations</div>
      <p style={{color:"white", fontSize:15, fontWeight:'bolder', boxShadow:'revert'}}>Whether it is a university campus, a theme park, a hospital, or a zoo, XGENBOX has provided customized deployments to clients with a myriad of different needs. The cost benefits and environmental benefits observed in large-scale municipal or commercial deployments are just as well replicated on a smaller scale.</p>

      </Col>
    </Row>
  </Col>
  <Col className="order-md-2" md="6" style={{backgroundImage: `url('https://xgenbox.com/wp-content/uploads/2023/03/istockphoto-922611582-612x612-1.jpg')`,height: "50vh",  backgroundSize: "cover"}}>
  <Row className="row-grid align-items-center justify-items-center ">
      <Col md="6" className="text-center d-flex align-items-center" >
      <div className="text-center ct-title  " style={{color:"white"}}>
        <div className="icon icon-lg icon-shape icon-shape-success  shadow rounded-circle " style={{width:100, height:100}}
        
        >
                      {/* <i className="ni ni-settings-gear-65" /> */}

                      <FontAwesomeIcon icon={faTruck}
                      style={{width:50, height:50, color:"#FFFFFF"}}

                        />
                    </div></div>
      </Col>
      <Col md="6">
      <div className="text-align ct-title  " style={{color:"white"}}>Waste collectors</div>
      <p style={{color:"white", fontSize:15, fontWeight:'bolder', boxShadow:'revert'}}>Whether it’s a family-owned hauler, a municipality, or a large waste management company responsible for multiple counties, our solutions have provided insights into operations, identified areas for efficiency improvement, and improved performance in several key areas of fleet management.</p>

      </Col>
    </Row>
  </Col>
</Row>
  )
}

export default Benefits