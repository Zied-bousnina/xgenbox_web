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
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // Form,

  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "Redux/actions/authActions";
import AppLoader from "assets/Animations/AppLoader";

const initialValues = { 
  email: '',
   password: ''
   }

   const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

function Login () {
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch()
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const errors1 = useSelector(state=>state?.error?.errors)
  const handleSubmit = (values) => {
    // Perform any actions (e.g., API calls) here
    console.log(values);
    // Access form values using "values" object
    dispatch(loginUser(values))
    setSubmitted(true); // Set the submitted state to true
  };
  // console.log(errors && errors)

  // {touched[name] && errors[name] || errors1&& errors1[name] ? (
  //   <Text style={styles.error}>{errors[name]} {errors1 && errors1[name]} </Text>
  //   ) : null}

    return (
      <>
      {/* <AppLoader/> */}
        <DemoNavbar />
        <main >
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-5">
                        {/* <small>Sign in </small> */}
                        {/* <img
                  alt="..."
                  style={{width: "200px", height: "auto"}}
                  
                  src={"https://xgenbox.com/wp-content/uploads/2023/03/Sans-titre-2.png"}
                /> */}
                      </div>
                      
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <big> sign in </big>
                      </div>
                      <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
>
  {({ errors, touched }) => (
    <Form role="form">
      <FormGroup className={`mb-3   ${
              touched.email && errors.email ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-email-83" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="email"
            placeholder="Email"
            type="email"
            className={`form-control ${
              touched.email && errors.email ? 'is-invalid' : ''
            }`}
            // className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="invalid-feedback"

          />
       
             
        </InputGroup>
      </FormGroup>
      <FormGroup className={`mb-3   ${
              touched.password && errors.password ? 'has-danger' : ''
            }`}>
        <InputGroup className="input-group-alternative">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Field
            name="password"
            placeholder="Password"
            type="password"
            autoComplete="off"
            className={`form-control ${
              touched.password && errors.password ? 'is-invalid' : ''
            }`}
          />
          <ErrorMessage
            name="password"
            component="div"
            className="invalid-feedback"
          />
        </InputGroup>
      </FormGroup>
      <div className="  ">
        {/* <Field
          type="checkbox"
          id="customCheckLogin"
          name="rememberMe"
          className="custom-control-input"
        /> */}
        {/* <label
          className="custom-control-label"
          htmlFor="customCheckLogin"
        > */}
          {touched.email && errors.email || errors1&& errors1.email ? (
            <>
            <br/>
                  <span style={{color:"red"}}> {errors1 && errors1.email} </span>
            </>
                  ) : null}
                  {touched.password && errors.password || errors1&& errors1.password ? (
            <>
            <br/>
                  <span style={{color:"red"}}> {errors1 && errors1.password} </span>
            </>
                  ) : null}
        {/* </label> */}
      </div>
      <div className="text-center">
      <Button
      className="my-4"
      color="primary"
      type="submit"
      disabled={isLoad}
      // onClick={handleSignIn}
    >
      {isLoad ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden"></span>
        </div>
      ) : (
        'Sign in'
      )}
    </Button>
      </div>
    </Form>
  )}
</Formik>

                    </CardBody>
                  </Card>
                  
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        {/* <SimpleFooter /> */}
      </>
    );
  
}

export default Login;
