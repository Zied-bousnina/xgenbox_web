
import FaqPartnersship from 'components/Company/components/FaqPartnersship'
import FormParternership from 'components/Company/components/FormParternership'
import FooterComponent from 'components/FooterComponents'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'

import { Container, Row } from 'reactstrap'
import FormTechnicalAssistance from './components/FormTechnicalAssistance'
import TopButton from 'components/TopButton/TopButton'




function TechnicalAssistance() {
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
          <section
      className="section section-lg pt-lg-0 "  
      style={{ marginTop:20}}
          >
                  <div
  className="shape shape-style-1 shape-default flex align-items-sm-center"
  style={
   { textAlign: "center", fontSize: 40, fontWeight: '400', color:'#434955', marginTop:20}
  }
>
Technical Support Request​
<p>This form allows our customers to report issues and get help from the XGENBOX technical support team.
Please provide as much information as possible, then click Submit to submit the request.</p>
</div>

    {/* <SecondComponent/> */}
    
          </section>
        


<section>



  
  <FormTechnicalAssistance/>
  
</section>


<TopButton/>
     </main>
     
     <FooterComponent/>
    </>
  )
}

export default TechnicalAssistance