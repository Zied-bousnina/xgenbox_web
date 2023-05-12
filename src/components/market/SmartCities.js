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
import TopButton from 'components/TopButton/TopButton'


function SmartCities() {
  return (
    <>
     <DemoNavbar />
     <main>
     <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-300 ">
            <div className="shape shape-style-1 shape-default mb--100 " style={{backgroundImage: "url('https://xgenbox.com/wp-content/uploads/2023/04/pexels-robert-stokoe-717637-scaled.jpg')", height: "50vh",  backgroundSize: "cover", filter: "brightness(90%) "}}>
  
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
Become a smart city
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
 
  >Cities today are beginning their transformation into smart cities, many are already well on their way! Along with smart traffic, smart lighting and smart energy, smart waste is an integral part of any smart city.</p>
  <p>
  Our offerings are fully stacked and vertically integrated so everyone sees and feels the direct benefits of using our solution, from bin-using citizens, to waste collectors, to policy makers.
  </p>
  
  </div>
</section>
<section className="section bg-secondary">
     

            <BenefitsSmartCities/>
            </section>
            <section
      style={{
        // backgroundColor: "#F8F9FE",
        marginTop: 90,
      }}
>
  <WhereToSettleCity/>
</section>



<TopButton/>
     </main>
     
     <FooterComponent/>
    </>
  )
}

export default SmartCities