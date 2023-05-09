import FaqPartnersship from 'components/Company/components/FaqPartnersship'
import FormParternership from 'components/Company/components/FormParternership'
import FooterComponent from 'components/FooterComponents'
import DemoNavbar from 'components/Navbars/DemoNavbar'


import React from 'react'

import { Col, Container, Row } from 'reactstrap'
import ContactUsForm from './components/ContactUsForm'
import { AspectRatio, Card } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationDot, faLocationPin, faLocationPinLock, faPhone } from '@fortawesome/free-solid-svg-icons'




function ContactDetail() {
  return (
    <>
     <DemoNavbar />
     <main>
     <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300 ">
            <div className="shape shape-style-1 shape-default mb--100 " style={{
              backgroundImage: "url('https://xgenbox.com/wp-content/uploads/2023/04/REPLACE-THIS-SCREEN1111112-copie.png')", height: "50vh",  backgroundSize: "cover"}}>
  
</div>

  <Container className="py-lg-md d-flex justify-content-center">
    <div className="col px-0">
      {/* <Row className="justify-content-center">
        <div className="d-flex justify-content-center align-items-center  img-fluid  circle rounded rounded-circle" style={{backgroundColor: "white", width: "220px", height: "220px"}}>
          <img
            alt="..."
            className="rounded-circle img-fluid  "
            src="https://xgenbox.com/wp-content/uploads/2023/03/logo.svg"
            width={200}
            
            style={{zIndex: "1"}}
            onMouseOver={e => e.currentTarget.parentNode.style.backgroundColor = "#3C976E"}
      onMouseOut={e => e.currentTarget.parentNode.style.backgroundColor = "white"}
          />
        </div>
      </Row> */}
    </div>
  </Container>
  {/* SVG separator */}
  <div className="separator separator-bottom separator-skew pb-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="fill-white"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>
</section>
            {/* 1st Hero Variation */}
          </div>
          
        


<section>
<div
  className="shape shape-style-1 shape-default flex align-items-sm-center"
  style={
   { textAlign: "center", fontSize: 28, fontWeight: '400', color:'#434955', marginTop:70}
  }
>
Contact us
</div>

<Row>
  <Col
    md="8"
  >
  <ContactUsForm/>
  </Col>
  <Col
    md="4"
    className=" bg-secondary"
  >

<Card variant="outlined" sx={{ width: 400, padding:5 }}
className="section bg-secondary"
>
<AspectRatio ratio={16 / 9}>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12784.65166088452!2d10.210111!3d36.766659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd367d86ee0f63%3A0xc92b9c9cf6c49dba!2sJebel%20Jelloud%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1683624829166!5m2!1sen!2sus'
    
  />
</AspectRatio>
  {/* <Typography mt={2}>Title</Typography>
  <Typography level="body2">Description of the card.</Typography> */}
  <Row
  style={{
    marginTop:40
  }}
  >
    <Col
      md="12"
    >
    <FontAwesomeIcon icon={faLocationDot} style={{marginRight:20, color:"#3C976E", fontSize:21}} />
    Z4, Saint Gobain, Jbel Jloud
    </Col>

  </Row>
  <Row
  style={{
    marginTop:20
  }}
  >
    <Col
      md="12"
    >
    <FontAwesomeIcon icon={faPhone} style={{marginRight:20, color:"#3C976E", fontSize:21}} />
    
+216 20 200 698
    </Col>

  </Row>
  <Row
  style={{
    marginTop:20
  }}
  >
    <Col
      md="12"
    >
    <FontAwesomeIcon icon={faEnvelope} style={{marginRight:20, color:"#3C976E", fontSize:21}} />
    direction@xgenbox.com
    </Col>

  </Row>
  

</Card>

  </Col>
</Row>
  
  
</section>



     </main>
     
     <FooterComponent/>
    </>
  )
}

export default ContactDetail