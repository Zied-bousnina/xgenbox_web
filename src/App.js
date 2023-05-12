
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";

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
import PrivateRouter from "components/PrivateRouter.js";
import ForceRedirect from "components/ForceRedirect.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import NoAccess from "components/NoAccess.js";
function App() {
  const user= {
    isConnected:true,
    role:"ADMIN"
  }
 
  return (
    <BrowserRouter>
    {/* <DemoNavbar/> */}
    <Switch>
           <Route path="/admin"   render={(props) => 
           <PrivateRouter user={user}>
            <AdminLayout {...props} />
           </PrivateRouter>
          } />
          
           <Route path="/" exact render={(props) => <Landing {...props} />} />
           <Route path="/landing-page" exact render={(props) => <Landing {...props} />}/>
           <Route path="/smart-box" exact render={(props) => <SmartBox {...props} />}/>
           <Route path="/fleet-management-platform" exact render={(props) => <FleetManagmentPlatform {...props} />}/>
           <Route path="/quote-request" exact render={(props) => <QuoteRequest {...props} />}/>
           <Route path="/smart-cities" exact render={(props) => <SmartCities {...props} />}/>
           <Route path="/commercial-establishments" exact render={(props) => <CommercialEstablishment {...props} />}/>
           <Route path="/login" render={(props) => 
           <ForceRedirect user={user}>
           {/* <Login /> */}
           <Login {...props} />
         </ForceRedirect>
           } />
           <Route path="/private-organizations" exact render={(props) => <PrivateOrganization {...props} />}/>
           <Route path="/waste-collectors" exact render={(props) => <WasteCollector {...props} />}/>
           <Route path="/about-company" exact render={(props) => <AboutCompany {...props} />}/>
           <Route path="/partnership-opportunities" exact render={(props) => <Partnership {...props} />}/>
           <Route path="/contact-details" exact render={(props) => <ContactDetail {...props} />}/>
           <Route path="/technical-assistance" exact render={(props) => <TechnicalAssistance {...props} />}/>
           {/* <Route path="/login-page" exact render={(props) => <Login {...props} />}/> */}
           <Route path="/profile-page" exact render={(props) => <Profile {...props} />}/>
           <Route path="/register-page" exact render={(props) => <Register {...props} />}/>
           <ForceRedirect user={user}>
           {/* <Login /> */}
           <NoAccess  />
         </ForceRedirect>
           {/* <Route path="/noaccess" exact render={(props) => <NoAccess {...props} />}/> */}
           {/* <FooterComponent/> */}
           <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;