import Benefits from 'components/Benefits'
import FooterComponent from 'components/FooterComponents'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import BenefitsSmartCities from 'components/contact/components/BenefitsSmartCities'
import Carateristique from 'components/products/components/Carecteristiques'
import ElectronicBrochure from 'components/products/components/ElectronicBrochure'
import Features from 'components/products/components/Features'
import MoreFeatures from 'components/products/components/MoreFeatures'
import ProductDetails from 'components/products/components/ProductDetails'
import React from 'react'

import { Container, Row } from 'reactstrap'
import WhereToSettleCity from './components/WhereToSettleCity'
import BenifitsCommercialEstabilishments from './components/BenifitsCommercialEstabilishments'
import WhereToInstall from './components/WhereToInstall'
import WhereToInstallaPrivateOrganization from './components/WhereToInstallPrivateOrganization'


function CommercialEstablishment() {
  return (
    <>
     <DemoNavbar />
     <main>
     <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300 ">
            <div className="shape shape-style-1 shape-default mb--100 " style={{backgroundImage: "url('https://xgenbox.com/wp-content/uploads/2023/04/418596.webp')", height: "500px",  backgroundSize: "cover", 
            backgroundPosition: " bottom ",
            // backgroundRepeat: "no-repeat",
            filter: "brightness(90%) "}}>
  
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
        // backgroundColor: "#F8F9FE",
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
Commercial applications​
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
    style={{
      textAlign: "center",
      fontSize: 18,
      fontWeight: '400',
      color:'#434955',
      marginTop:20,
      marginBottom:20,
      margin:20
    }}

 
  >Whether it’s a shopping mall, convention center, airport or office complex, waste management solutions will save customers millions of dollars by reducing the cost of their waste management operations.</p>
 
  
  </div>
</section>
<section className="section bg-secondary">
     

            <BenifitsCommercialEstabilishments/>
            </section>
            <section
      style={{
        // backgroundColor: "#F8F9FE",
        marginTop: 90,
      }}
>
<div
  className="shape shape-style-1 shape-default flex align-items-sm-center"
  style={
   { textAlign: "center", fontSize: 28, fontWeight: '400', color:'#434955', marginTop:-20}
  }
>
Where to Install
</div>
  
  <WhereToInstall/>
</section>




     </main>
     
     <FooterComponent/>
    </>
  )
}

export default CommercialEstablishment