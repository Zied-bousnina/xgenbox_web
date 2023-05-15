/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
           
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  style={{width: "200px", height: "auto"}}
                  
                  src={"https://xgenbox.com/wp-content/uploads/2023/03/logo-copie.png"}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={"https://xgenbox.com/wp-content/uploads/2023/03/logo.png"}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
              



                {/*  */}
                <Nav className="align-items-lg-center ml-lg-auto  " navbar>
                  








               


                <Nav className="navbar-nav-hover align-items-lg-center  " navbar>
                

                  {/* Products */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text ">Products</span>
                     
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/smart-box" tag={Link}>
                        Smart box
                      </DropdownItem>
                      <DropdownItem to="/fleet-management-platform" tag={Link}>
                        Fleet Management platform
                      </DropdownItem>
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  

                 {/* Markets */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Markets</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/smart-cities" tag={Link}>
                        Smart cities
                      </DropdownItem>
                      <DropdownItem to="/commercial-establishments" tag={Link}>
                        Commercial establishments
                      </DropdownItem>
                      <DropdownItem to="/private-organizations" tag={Link}>
                        private organizations
                      </DropdownItem>
                      <DropdownItem to="/waste-collectors" tag={Link}>
                        Waste collectors
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                 
                 {/* Company */}
                 <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Company</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about-company" tag={Link}>
                        About Company
                      </DropdownItem>
                      <DropdownItem to="/partnership-opportunities" tag={Link}>
                        Partnership opportunities
                      </DropdownItem>
                      <DropdownItem to="/admin" tag={Link}>
                        Admin
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* Contact */}
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Contact</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/contact-details" tag={Link}>
                        Contact details
                      </DropdownItem>
                      <DropdownItem to="/quote-request" tag={Link}>
                        Quote request
                      </DropdownItem>
                      <DropdownItem to="/technical-assistance" tag={Link}>
                        Technical assistance
                      </DropdownItem>
                      
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
