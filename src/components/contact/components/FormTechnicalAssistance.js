
import {
  FormGroup,
  Row,
  Col,
  Label,
} from "reactstrap";
import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { createTechAssist } from "Redux/actions/TechAssistanceAction";


function FormTechnicalAssistance() {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch()
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const [form, setForm] = useState({})


  const showToastMessage = () => {
    toast.success('Request sent successfully.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
  }
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // console.log(countries)
  
  const onChangeHandlerAttachment = (e) => {
    const { name, checked, value } = e.target;
    console.log(e.target.files[0])
   
        setForm({
          ...form,
          attachment: e.target.files[0]
        });
     
    
  };
  
  
  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;
  
   
      setForm({
        ...form,
        [name]: value
      });
    
    
  };


  const onSubmit = (e)=>{
    
  e.preventDefault();
  
  const formdata = new FormData();
  Object.keys(form).forEach((key) => {
    if (Array.isArray(form[key])) {
      form[key].forEach((value) => {
        formdata.append(key, value);
      });
    } else {
      formdata.append(key, form[key]);
    }
  });
  console.log(form)
  console.log(formdata)
  dispatch(createTechAssist(formdata))
  e.target.reset();
  }
  useEffect(() => {
    if (isSuccess) {
      
      showToastMessage()
    }
  }, [isSuccess])
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
        
        <input type="text" required  name={"tel"} className={classNames("form-control")} onChange={onChangeHandler}/>
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
  <ToastContainer />
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
        
        <input type="select" required  name={"productSerialNumber"} className={classNames("form-control")} onChange={onChangeHandler}/>
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

      name={"description"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="description of the problem"
      style={{height:"100px"}}
      required
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
       id="avatar" name="attachment"
       onChange={onChangeHandlerAttachment}
       
       accept="image/png, image/jpeg, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
       />
      
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
            
        // onChange={onChangeHandlerDistfection}
        required
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
            // onChange={onChangeHandlerDistfection}
            required
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
</>

  );
}

export default FormTechnicalAssistance;