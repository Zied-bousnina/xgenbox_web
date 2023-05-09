import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import CostomFormik from "../../costomFormik/CostomFormik";

import { useForm } from "react-hook-form";
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import * as yup from 'yup';
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from 'axios';

function FormTechnicalAssistance() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(countries)
  
  
  const [form, setForm] = useState({
    sensors:[],
    disinfection:[]
  })
  
  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;
  
    if (name === "sensors") {
      if (checked) {
        setForm({
          ...form,
          sensors: [...form.sensors, value]
        });
      } else {
        setForm({
          ...form,
          sensors: form.sensors.filter((sensor) => sensor !== value)
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
    
  };
  const onChangeHandlerDistfection = (e) => {
    const { name, checked, value } = e.target;
  
    if (name === "disinfection") {
      if (checked) {
        setForm({
          ...form,
          disinfection: [...form.disinfection, value]
        });
      } else {
        setForm({
          ...form,
          disinfection: form.disinfection.filter((disinfection) => disinfection !== value)
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
    
  };

  const onSubmit = (e)=>{
    
  e.preventDefault();
  console.log(form)
  // dispatch(LoginAction(form, navigate))
  }
  return (

<>
<form onSubmit={onSubmit}
style={
  {
    padding:"20px",
    border:"1px solid #ccc",
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
      <label className="form-label">E-mail<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"email"} className={classNames("form-control")} onChange={onChangeHandler}/>
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
      <label className="form-label">Phone number <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="text" required  name={"tlp"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
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
      <label className="form-label">Company Name</label>
      <div className="input-group">
        
        <input type="text"  name={"companyName"} className={classNames("form-control")} onChange={onChangeHandler}/>
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
      <label className="form-label">Company Web-site</label>
      <div className="input-group">
        
        <input type="text"  name={"companyWebSite"} className={classNames("form-control")} onChange={onChangeHandler}/>
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
      <label className="form-label">Job Title</label>
      <div className="input-group">
        
        <input type="text"  name={"jobTitle"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
  </Row>
  <Row>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Country<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"country"} required className={classNames("form-control")} onChange={onChangeHandler}>
        {
          countries.map(country=>(
            <option value={country.name}>{country.name}</option>

          ))
        }
      </select>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">City <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="select" required  name={"city"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    
  </Row>
  <Row>
    
    <Col 
    md="12"
    >
       <div className=" mb-3">
      <label className="form-label">Product serial number(s)  <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        <input type="select" required  name={"serialNumber"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    
  </Row>
  <Row>
    <Col
    md="12"
    >
       <label className="form-label">Description of the problem <span style={{color:"red"}}>*</span></label>
      <textarea

      name={"probDesc"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="description of the problem"
      style={{height:"100px"}}
      />
    </Col>
  </Row>
  <Row>
    <Col md="12">
    <FormGroup>
    <Label>
    Attachments
    </Label>
    <div className="custom-control custom-radio mb-3">
    <input type="file"
       id="avatar" name="avatar"
       
       accept="image/png, image/jpeg"/>
      
    </div>
    
    
  </FormGroup>
    </Col>
  </Row>
  
  
  

  <Row>
    <Col
    md="12"
    >
        <label className="form-label" required>GDPR Agreement  <span style={{color:"red"}}>*</span></label>
        <FormGroup>
              
              <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            id="automaticspray"
            name="disinfection"
            type="checkbox"
            value="Automatic spray"
        onChange={onChangeHandlerDistfection}
          />
          <label className="custom-control-label" htmlFor="automaticspray">
          I consent to XGENBOX storing my submitted information so they can respond to my inquiry.
          </label>
        </div>
        <div className="custom-control custom-checkbox mb-3">
          <input
            className="custom-control-input"
            name="disinfection"
            id="UVsterilization"
            type="checkbox"
            value={"UV sterilization"}
            onChange={onChangeHandlerDistfection}
          />
          <label className="custom-control-label" htmlFor="UVsterilization">
          Subscribe to our newsletter ?
          </label>
        </div>
          <p>By submitting your email address, you authorize XGENBOX to store your information to contact you about our solution.</p>
              </FormGroup>
    </Col>
        
  </Row>
  <Row>
    <Col>
    <button type="submit" className="btn btn-outline-primary">
                  Submit <i className="fa-solid fa-floppy-disk"></i>
                </button></Col>
  </Row>
</form>
</>

  );
}

export default FormTechnicalAssistance;