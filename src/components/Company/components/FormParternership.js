
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormGroup,
  Row,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import classNames from "classnames";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { CreatePartership } from "Redux/actions/PartnershipAction";



function FormParternership() {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch()
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)

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
  
  // const onChangeHandlerDistfection = (e) => {
    //   const { name, checked, value } = e.target;
    
    //   if (name === "disinfection") {
      //     if (checked) {
        //       setForm({
          //         ...form,
  //         disinfection: [...form.disinfection, value]
  //       });
  //     } else {
    //       setForm({
      //         ...form,
      //         disinfection: form.disinfection.filter((disinfection) => disinfection !== value)
  //       });
  //     }
  //   } else {
  //     setForm({
  //       ...form,
  //       [name]: value
  //     });
  //   }
  
  // };
  
  const onSubmit = (e)=>{
    
    e.preventDefault();
    console.log(form)
  dispatch(CreatePartership(form))

    
   
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
        
        <input type="text" required  name={"tel"} className={classNames("form-control")} onChange={onChangeHandler} minLength={8} maxLength={8}/>
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
       <label className="form-label">Company presentation <span style={{color:"red"}}>*</span></label>
      <textarea

      name={"companyPresentation"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="Message"
      style={{height:"100px"}}
      />
    </Col>
  </Row>
  <Row>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Type of partnership<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"partnershipType"} className={classNames("form-control")} onChange={onChangeHandler}>
        <option>Sales agent</option>
        <option>General Distributor</option>
        <option>Exclusive Distributor</option>
        <option>Other</option>

      </select>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Target markets <span color="red">*</span></label>
      <div className="input-group">
        
        <input type="select"  name={"TargetMarkets"} className={classNames("form-control")} onChange={onChangeHandler}/>
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
       <label className="form-label" required>Distribution strategy  <span style={{color:"red"}}>*</span></label>
      <textarea
required
      name={"DistrubutionSrategy"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="Message"
      style={{height:"100px"}}
      />
    </Col>
  </Row>
  <Row>
    <Col
    md="12"
    >
       <label className="form-label" required>Projects for which you plan to use the solution   <span style={{color:"red"}}>*</span></label>
      <textarea
      required

      name={"ProjectsForWhichYouPlanToUseTheSolution"}
      className={classNames("form-control")}
      onChange={onChangeHandler}
      placeholder="Message"
      style={{height:"100px"}}
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

export default FormParternership;