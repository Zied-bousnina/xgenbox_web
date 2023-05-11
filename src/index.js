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
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
// import "./index.css"

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import { ChakraProvider } from '@chakra-ui/react'
import SmartBox from "components/products/SmartBox";
import FleetManagmentPlatform from "components/products/FleetManagmentPlatform";
import QuoteRequest from "components/contact/QuoteRequest";
import SmartCities from "components/market/SmartCities";
import CommercialEstablishment from "components/market/CommercialEstablishment";
import PrivateOrganization from "components/market/PrivateOrganization";
import WasteCollector from "components/market/WasteCollectors";
import AboutCompany from "components/Company/AoutCompany";
import Partnership from "components/Company/Partnership";
import ContactDetail from "components/contact/ContactDetail";
import TechnicalAssistance from "components/contact/TechnicalAssistance";
import AdminLayout from "./layouts/Admin.js";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/smart-box"
        exact
        render={(props) => <SmartBox {...props} />}
      />

      <Route
        path="/fleet-management-platform"
        exact
        render={(props) => <FleetManagmentPlatform {...props} />}
      />
       <Route
        path="/quote-request"
        exact
        render={(props) => <QuoteRequest {...props} />}
      />
      <Route
        path="/smart-cities"
        exact
        render={(props) => <SmartCities {...props} />}
      />
      <Route
        path="/commercial-establishments"
        exact
        render={(props) => <CommercialEstablishment {...props} />}
      />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route
        path="/private-organizations"
        exact
        render={(props) => <PrivateOrganization {...props} />}
      />
      <Route
        path="/waste-collectors"
        exact
        render={(props) => <WasteCollector {...props} />}
      />

<Route
        path="/about-company"
        exact
        render={(props) => <AboutCompany {...props} />}
      />
      <Route
        path="/partnership-opportunities"
        exact
        render={(props) => <Partnership {...props} />}
      />
       <Route
        path="/contact-details"
        exact
        render={(props) => <ContactDetail {...props} />}
      />
      <Route
        path="/technical-assistance"
        exact
        render={(props) => <TechnicalAssistance {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={(props) => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={(props) => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  </ChakraProvider>
);
