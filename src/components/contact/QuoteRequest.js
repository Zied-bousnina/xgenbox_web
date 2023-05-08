import FooterComponent from 'components/FooterComponents'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import Carateristique from 'components/products/components/Carecteristiques'
import ElectronicBrochure from 'components/products/components/ElectronicBrochure'
import Features from 'components/products/components/Features'
import MoreFeatures from 'components/products/components/MoreFeatures'
import ProductDetails from 'components/products/components/ProductDetails'
import React from 'react'

import { Container, Row } from 'reactstrap'
import QuoteForm from './components/QuoteForm'


function QuoteRequest() {
  return (
    <>
     <DemoNavbar />
     <main>
     <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300 ">
            <div className="shape shape-style-1 shape-default mb--100 " style={{backgroundImage: "url('https://xgenbox.com/wp-content/uploads/2023/04/REPLACE-THIS-SCREEN1111112-copie.png')", height: "50vh",  backgroundSize: "cover", filter: "brightness(90%) "}}>
  
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
          <section
      style={{
        backgroundColor: "#F8F9FE",
        marginTop: 90,
        marginBottom:50
      }}
>
{/* <section className="section bg-secondary"> */}
            <div
  className="shape shape-style-1 shape-default flex align-items-sm-center"
  style={
   { textAlign: "center", fontSize: 28, fontWeight: '400', color:'#434955', marginTop:-20}
  }
>
Quote request
</div>
  {/* <Carateristique/> */}
  <div
   style={{
    textAlign: "center",
    fontSize: 18,
    fontWeight: '400',
    color:'#434955',
    marginTop:20,
    marginBottom:20,
    margin:20
  }}
  >

  <p
 
  >This form allows our customers to request a personalized quote for the products and services offered by XGENBOX. Please provide as much information as possible, including your specific requirements, quantities needed and your company details, so that our sales team can provide you with an accurate quote.</p>
  <p>
  Once you have completed the form, click submit to send your request. We will answer you as soon as possible with a proposal adapted to your needs.
  </p>
  
  </div>
</section>
          {/* <section className="section section-lg pt-lg-0 mt--200" style={{ backgroundColor: "#3C976E", marginTop: 20, marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "center" }}> */}
  <QuoteForm/>
{/* </section> */}

<section className="section section-lg pt-lg-0" style={{ backgroundColor: "#3C976E", marginTop: 20, marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
  
    <MoreFeatures/>
  </section>
  <section
      style={{
        backgroundColor: "#F8F9FE",
        marginTop: 90,
      }}
>
  
  <ElectronicBrochure/>
</section>

     </main>
     
     <FooterComponent/>
    </>
  )
}

export default QuoteRequest