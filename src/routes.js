/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/index2";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import RequestsMunicpal from "./components/RequestsMunicpal";
import ListOfUsers from "components/ListOfUsers";
import UserDetails from "components/UserDetails";
import PartnershipList from "components/PartnershipList";
import QuoteList from "components/QuoteList";
import TechnicalAssistanceList from "components/TechnicalAssistanceList";
import ContactsList from "components/ContactsList";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/requests",
    name: "Requests Municipal",
    icon: "ni ni-planet text-blue",
    component: RequestsMunicpal,
    layout: "/admin"
  },
  {
    path: "/List-Users",
    name: "List Of users",
    icon: "ni ni-planet text-blue",
    component: ListOfUsers,
    layout: "/admin"
  },
  {
    path: "/user-details/:id",
    name: "user details",
    icon: "ni ni-planet text-blue",
    component: UserDetails,
    layout: "/admin"
  },
  
 
  {
    path: "/partnership-list",
    name: "Partnership requests",
    icon: "ni ni-planet text-blue",
    component: PartnershipList,
    layout: "/admin"
  },
  {
    path: "/quote-list",
    name: "quote requests",
    icon: "ni ni-planet text-blue",
    component: QuoteList,
    layout: "/admin"
  },
  {
    path: "/tech-assist-list",
    name: "technical assistance list",
    icon: "ni ni-planet text-blue",
    component: TechnicalAssistanceList,
    layout: "/admin"
  },
  {
    path: "/contact-lists",
    name: "Contact List",
    icon: "ni ni-planet text-blue",
    component: ContactsList,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
