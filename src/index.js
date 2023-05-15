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


import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
// import "./index.css"
import { ChakraProvider, ColorModeProvider  } from '@chakra-ui/react'



import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scss/argon-dashboard-react.scss";
import store from './Redux/store';
import { Provider } from "react-redux";
import App from "App";
import index from './index.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

  <ChakraProvider>
  <ColorModeProvider options={{ initialColorMode: "light" }}>

 <App/>
  </ColorModeProvider>
  </ChakraProvider>
  </Provider>
);
