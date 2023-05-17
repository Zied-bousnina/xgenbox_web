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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from "axios";
import classNames from "classnames";
import { AddBin } from "Redux/actions/BinAction";
const CreateBin = () => {
  const profile = useSelector(state=>state?.profile?.profile)
  const error = useSelector(state=>state.error?.errors)
  

const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const dispatch = useDispatch()
  const showToastMessage = () => {
    toast.success('Bin created successfully.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
  }
  
 
 
  
  
  
  const [form, setForm] = useState({
  })
  
  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;
  
   
      setForm({
        ...form,
        [name]: value
      });
      
      
  };
  useEffect(() => {
    if (isSuccess) {
      
      showToastMessage()
    }
  }, [isSuccess])

  const onSubmit = (e)=>{
    
    e.preventDefault();
    console.log(form)
  dispatch(AddBin(form))

  // !error?.success ? showErrorToastMessage() : null
 

    
   
      // showToastMessage()
      
      e.target.reset();
   
  
  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={profile?.avatar}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                
                <div className="text-center mt-md-5">
                  <h3>
                  {user?.name}
                   
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {profile?. address}, {profile?.city}, {profile?.country}
                  </div>
                 
                  <hr className="my-4" />
                  <p>
                    {profile?.Bio}
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col> */}
          <Col className="order-xl-1" xl="11">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Create Trash bin</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <form onSubmit={onSubmit}
style={
  {
    padding:"20px",
    // border:"1px solid #ccc",
    borderRadius:"5px",
    justifyContent: 'center',
    alignItems: 'center',
    margin:20
    // display: 'flex',
  }

}
>
  <Row>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Name<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"name"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Location<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"location"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">address <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"address"} className={classNames("form-control")} onChange={onChangeHandler} />
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
  </Row>
  <ToastContainer />
  <Row>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">latitude <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required name={"lat"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-">
      <label className="form-label">Longitude<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"long"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    {/* <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Job Title</label>
      <div className="input-group">
        
        <input type="text"  name={"jobTitle"} className={classNames("form-control")} onChange={onChangeHandler}/>
       
      </div>
    </div>
    </Col> */}
  </Row>
  <Row>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Type<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"type"} required className={classNames("form-control")} onChange={onChangeHandler}>
        
            <option value={"plastique"}>Plastique</option>
            <option value={"glass"}>Glass</option>
            <option value={"paper"}>Paper</option>
            <option value={"other"}>Other</option>

        
      </select>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">capacity<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"type"} required className={classNames("form-control")} onChange={onChangeHandler}>
        
            <option value={"plastique"}>140 Litres (750 x 900 x 1400 mm)</option>
            <option value={"glass"}>240 Litres (900 x 1000 x 1500 mm)</option>
            <option value={"paper"}>360 Litres (1050 x 1050 x 1500 mm)</option>
            {/* <option value={"other"}>Other</option> */}

        
      </select>
      </div>
    </div>
    </Col>
    
  </Row>
  <Row>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Gaz Topic<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"topicGaz"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Topic Niveau<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"topicNiv"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      <label className="form-label">Topic Open <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"topicOuv"} className={classNames("form-control")} onChange={onChangeHandler} />
        <br/>
        {/* {
          error?.success && (<div  className="invalid-feedback">
          {error?.error}
        </div>)
        } */}
        
      </div>
    </div>
    </Col>
  </Row>
  <Row>
    <Col 
    md="4"
    >
       <div className=" mb-3">
      {
          !error?.success && (<span style={{color:"red"}}>
{error?.success ? "" : error?.error}
          </span>)
        }
        <div   >
          {/* {errors}dfds */}
        </div>
    </div>
    </Col>
    
  </Row>
 
 
  
  

  
  <Row>
    <Col>
    <button type="submit" className="btn btn-outline-primary">
    {isLoad ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden"></span>
        </div>
      ) : (
        'Submit'
      )}

                  <i className="fa-solid fa-floppy-disk"></i>
                </button></Col>
  </Row>
</form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateBin;