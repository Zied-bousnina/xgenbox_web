
import {
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { CreateContactUs } from "Redux/actions/ContactUsAction";
function ContactUsForm() {
  const [countries, setCountries] = useState([]);
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const dispatch = useDispatch()
  const [form, setForm] = useState({  })

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
  
  
  
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
  
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
  dispatch(CreateContactUs(form))

    
   
      // showToastMessage()
      
      e.target.reset();
   
  
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
  <ToastContainer />
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
       <label className="form-label">Message 
 <span style={{color:"red"}}>*</span></label>
      <textarea

      name={"message"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="Message"
      style={{height:"100px"}}
      required
      />
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

export default ContactUsForm;