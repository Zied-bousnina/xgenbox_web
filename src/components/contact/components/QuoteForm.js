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
import { useState } from "react";
import classNames from "classnames";

const initialValues = {
  description:"",
  price:'',
  category:'',
  image:"",
  quantity: '',
  weight:'',
  length: '',
  name:"",



};
const validationSchema = yup.object({
  description: yup.string().required("description is required"),
  price: yup.string().required("price is required"),
  category: yup.string().required("category is required"),
  image: yup.string().required("image is required"),
  quantity: yup.string().required("quantity is required"),
  weight: yup.string().required("weight is required"),
  length: yup.string().required("length is required"),
  name: yup.string().required("name is required"),

});
function QuoteForm() {
 

 
  
  
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
//     <>
//         <Form
//          style={{margin:40}}
//         >
//           <Row>
//             <Col md="4">
//             <FormControl isRequired>
//   <FormLabel>Name</FormLabel>
//   <Input placeholder='Name' />
// </FormControl>
//             </Col>
//             <Col md="4">
//             <FormControl isRequired>
//   <FormLabel>Email address</FormLabel>
//   <Input type='email' />
 
// </FormControl>
//             </Col>
//             <Col md="4">
//             <FormControl isRequired>
//   <FormLabel>Phone Number</FormLabel>
//   <Input placeholder='Phone Number' />
// </FormControl>
//             </Col>
//           </Row>
//           <Row>
//             <Col md="4">
//             <FormControl >
//   <FormLabel>Company Name</FormLabel>
//   <Input placeholder='Company Name' />
// </FormControl>
//             </Col>
//             <Col md="4">
//             <FormControl >
//   <FormLabel>company Website</FormLabel>
//   <Input placeholder='company Website' />
// </FormControl>
//             </Col>
//             <Col md="4">
//             <FormControl isRequired>
//   <FormLabel>Job Title</FormLabel>
//   <Input placeholder='Job Title' />
// </FormControl>
//             </Col>
//           </Row>
//           <Row>
//             <Col md="6">
//               <FormGroup>
//                 <Label>Country <span style={{color:"red"}}>*</span></Label>
//               <UncontrolledDropdown
//               style={{width:"100%"}} 
//               >
//           <DropdownToggle caret color="secondary"
//           style={{width:"100%"}}  

//           >
//             Choose a Country
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Action
//             </DropdownItem>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Another action
//             </DropdownItem>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Something else here
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//               </FormGroup>
//             </Col>
//             <Col md="6">
//               <FormGroup>
//                 <Label>
// City <span style={{color:"red"}}>*</span> </Label>
//                 <Input
//                   id="exampleFormControlInput1"
//                   // placeholder="name@example.com"
//                   type="email"
//                 />
//               </FormGroup>
//             </Col>
            
//           </Row>
//           <Row>
//             <Col md="6">
//               <FormGroup>
//                 <Label>Size <span style={{color:"red"}}>*</span></Label>
//               <UncontrolledDropdown
//               style={{width:"100%"}} 
//               >
//           <DropdownToggle caret color="secondary"
//           style={{width:"100%"}}  

//           >
//             Choose a Size
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Action
//             </DropdownItem>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Another action
//             </DropdownItem>
//             <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
//               Something else here
//             </DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//               </FormGroup>
//             </Col>
//             <Col md="6">
//               <FormGroup>
//                 <Label>
// Quantity <span style={{color:"red"}}>*</span> </Label>
//                 <Input
//                   id="exampleFormControlInput1"
//                   // placeholder="name@example.com"
//                   type="email"
//                 />
//               </FormGroup>
//             </Col>
            
//           </Row>

        //   {/* Functional features */}
        //   <Row>
        //     <Col md="12">
        //       <h1>Functional features</h1>
        //       </Col>

        //   </Row>
        //   <Row
        //   style={{marginTop:20}}
        //   >
        //     <Col md="3">
        //       <FormGroup>
        //       <Label>
        //       Power supply  <span style={{color:"red"}}>*</span> </Label>
        //       <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
        //     id="solar"
        //     name="power"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="solar">
        //     Solar
        //   </label>
        // </div>
        // <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
            
        //     id="electric"
        //     name="power"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="electric">
        //     Electric
        //   </label>
        // </div>
        // <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
            
        //     id="hybrid"
        //     name="power"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="hybrid">
        //     Hybrid
        //   </label>
        // </div>
        //       </FormGroup>

        //  </Col>
        //  <Col md="3">
        //       <FormGroup
        //       >
        //       <Label>
        //       Connectivity   <span style={{color:"red"}}>*</span> </Label>
        //       <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
        //     id="customRadio5"
        //     name="Connectivity"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="customRadio5">
        //     4G
        //   </label>
        // </div>
        // <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
            
        //     id="customRadio6"
        //     name="Connectivity"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="customRadio6">
        //     WI-FI
        //   </label>
        // </div>
        // <div className="custom-control custom-radio mb-3">
        //   <input
        //     className="custom-control-input"
            
        //     id="bluetooth"
        //     name="Connectivity"
        //     type="radio"
        //   />
        //   <label className="custom-control-label" htmlFor="bluetooth">
        //     Bluetooth
        //   </label>
        // </div>
        //       </FormGroup>

        //  </Col>
        //  <Col md="3">
        //       <FormGroup>
        //       <Label>
        //       Disinfection  <span style={{color:"red"}}>*</span> </Label>
        //       <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     id="automaticspray"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="automaticspray">
        //   Automatic spray
        //   </label>
        // </div>
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     defaultChecked
        //     id="UVsterilization"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="UVsterilization">
        //   UV sterilization
        //   </label>
        // </div>
        //       </FormGroup>

        //  </Col>
        //  <Col md="3">
        //       <FormGroup>
        //       <Label>
        //       Sensors <span style={{color:"red"}}>*</span> </Label>
              
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     // defaultChecked
        //     id="chok"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="chok">
        //   Shock
        //   </label>
        // </div>
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     // defaultChecked
        //     id="Position"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="Position">
        //   Position
        //   </label>
        // </div>
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     // defaultChecked
        //     id="Level"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="Level">
        //   Level
        //   </label>
        // </div>
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     // defaultChecked
        //     id="Smoke"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="Smoke">
        //   Smoke
        //   </label>
        // </div>
        // <div className="custom-control custom-checkbox mb-3">
        //   <input
        //     className="custom-control-input"
        //     // defaultChecked
        //     id="Humidity"
        //     type="checkbox"
        //   />
        //   <label className="custom-control-label" htmlFor="Humidity">
        //   Humidity
        //   </label>
        // </div>
        //       </FormGroup>

        //  </Col>


        //   </Row>

//           {/* Optional features */}
//           <Row>
//             <Col md="12">
//               <h1>Optional features</h1>
//               </Col>

//           </Row>
//           <Row
//           style={{marginTop:20}}
//           >
//             <Col md="3">
//               <FormGroup>
//               <Label>
//               Graphic wraps  <span style={{color:"red"}}>*</span> </Label>
//               <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
//             id="solar"
//             name="power"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="solar">
//             Solar
//           </label>
//         </div>
//         <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
            
//             id="electric"
//             name="power"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="electric">
//             Electric
//           </label>
//         </div>
//         <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
            
//             id="hybrid"
//             name="power"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="hybrid">
//             Hybrid
//           </label>
//         </div>
//               </FormGroup>

//          </Col>
//          <Col md="3">
//               <FormGroup
//               >
//               <Label>
//               Connectivity   <span style={{color:"red"}}>*</span> </Label>
//               <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
//             id="customRadio5"
//             name="Connectivity"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="customRadio5">
//             4G
//           </label>
//         </div>
//         <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
            
//             id="customRadio6"
//             name="Connectivity"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="customRadio6">
//             WI-FI
//           </label>
//         </div>
//         <div className="custom-control custom-radio mb-3">
//           <input
//             className="custom-control-input"
            
//             id="bluetooth"
//             name="Connectivity"
//             type="radio"
//           />
//           <label className="custom-control-label" htmlFor="bluetooth">
//             Bluetooth
//           </label>
//         </div>
//               </FormGroup>

//          </Col>
//          <Col md="3">
//               <FormGroup>
//               <Label>
//               Disinfection  <span style={{color:"red"}}>*</span> </Label>
//               <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             id="automaticspray"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="automaticspray">
//           Automatic spray
//           </label>
//         </div>
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             defaultChecked
//             id="UVsterilization"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="UVsterilization">
//           UV sterilization
//           </label>
//         </div>
//               </FormGroup>

//          </Col>
//          <Col md="3">
//               <FormGroup>
//               <Label>
//               Sensors <span style={{color:"red"}}>*</span> </Label>
              
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             // defaultChecked
//             id="chok"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="chok">
//           Shock
//           </label>
//         </div>
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             // defaultChecked
//             id="Position"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="Position">
//           Position
//           </label>
//         </div>
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             // defaultChecked
//             id="Level"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="Level">
//           Level
//           </label>
//         </div>
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             // defaultChecked
//             id="Smoke"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="Smoke">
//           Smoke
//           </label>
//         </div>
//         <div className="custom-control custom-checkbox mb-3">
//           <input
//             className="custom-control-input"
//             // defaultChecked
//             id="Humidity"
//             type="checkbox"
//           />
//           <label className="custom-control-label" htmlFor="Humidity">
//           Humidity
//           </label>
//         </div>
//               </FormGroup>

//          </Col>


//           </Row>
//           {/* <Row>
//             <Col md="4">
//               <FormGroup>
//                 <Input
//                   id="exampleFormControlInput1"
//                   placeholder="name@example.com"
//                   type="email"
//                 />
//               </FormGroup>
//             </Col>
//             <Col md="4">
//               <FormGroup>
//                 <Input disabled placeholder="Regular" type="text" />
//               </FormGroup>
//             </Col>
//             <Col md="4">
//               <FormGroup>
//                 <Input disabled placeholder="Regular" type="text" />
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col md="6">
//               <FormGroup>
//                 <InputGroup className="mb-4">
//                   <InputGroupAddon addonType="prepend">
//                     <InputGroupText>
//                       <i className="ni ni-zoom-split-in" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <Input placeholder="Search" type="text" />
//                 </InputGroup>
//               </FormGroup>
//             </Col>
//             <Col md="6">
//               <FormGroup>
//                 <InputGroup className="mb-4">
//                   <Input placeholder="Birthday" type="text" />
//                   <InputGroupAddon addonType="append">
//                     <InputGroupText>
//                       <i className="ni ni-zoom-split-in" />
//                     </InputGroupText>
//                   </InputGroupAddon>
//                 </InputGroup>
//               </FormGroup>
//             </Col>
//           </Row>
//           <Row>
//             <Col md="6">
//               <FormGroup className="has-success">
//                 <Input
//                   className="is-valid"
//                   placeholder="Success"
//                   type=""
//                 />
//               </FormGroup>
//             </Col>
//             <Col md="6">
//               <FormGroup className="has-danger">
//                 <Input
//                   className="is-invalid"
//                   placeholder="Error Input"
//                   type="email"
//                 />
//               </FormGroup>
//             </Col>
//           </Row> */}
//         </Form>
//       </>

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
        <option>Tunisie</option>
        <option>Turkey</option>
        <option>3</option>

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
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Size<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"size"} className={classNames("form-control")} onChange={onChangeHandler}>
        <option>1</option>
        <option>2</option>
        <option>3</option>

      </select>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Quantity</label>
      <div className="input-group">
        
        <input type="select"  name={"quantity"} className={classNames("form-control")} onChange={onChangeHandler}/>
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      </div>
    </div>
    </Col>
    
  </Row>
  {/* Functional features */}
  <Row>
            <Col md="12">
              <h1>Functional features</h1>
              </Col>

          </Row>
          <Row
          style={{marginTop:20}}
          >
           <Col md="3">
  <FormGroup>
    <Label>
      Power supply <span style={{ color: "red" }}>*</span>
    </Label>
    <div className="custom-control custom-radio mb-3">
      <input
        className="custom-control-input"
        id="solar"
        name="power"
        type="radio"
        value="solar"
        onChange={onChangeHandler}
        
      />
      <label className="custom-control-label" htmlFor="solar">
        Solar
      </label>
    </div>
    <div className="custom-control custom-radio mb-3">
      <input
        className="custom-control-input"
        id="electric"
        name="power"
        type="radio"
        value="electric"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="electric">
        Electric
      </label>
    </div>
    <div className="custom-control custom-radio mb-3">
      <input
        className="custom-control-input"
        id="hybrid"
        name="power"
        type="radio"
        value="hybrid"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="hybrid">
        Hybrid
      </label>
    </div>
  </FormGroup>
</Col>
         <Col md="3">
              <FormGroup
              >
              <Label>
              Connectivity   <span style={{color:"red"}}>*</span> </Label>
              <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            id="customRadio5"
            name="Connectivity"
            type="radio"
            value="4G"
            onChange={onChangeHandler}
          />
          <label className="custom-control-label" htmlFor="customRadio5">
            4G
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            
            id="customRadio6"
            name="Connectivity"
            type="radio"
            value="WI-FI"
            onChange={onChangeHandler}
          />
          <label className="custom-control-label" htmlFor="customRadio6">
            WI-FI
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            className="custom-control-input"
            
            id="bluetooth"
            name="Connectivity"
            type="radio"
            value="bluetooth"
            onChange={onChangeHandler}
          />
          <label className="custom-control-label" htmlFor="bluetooth">
            Bluetooth
          </label>
        </div>
              </FormGroup>

         </Col>
         <Col md="3">
              <FormGroup>
              <Label>
              Disinfection  <span style={{color:"red"}}>*</span> </Label>
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
          Automatic spray
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
          UV sterilization
          </label>
        </div>
              </FormGroup>

         </Col>
         <Col md="3">
  <FormGroup>
    <Label>
      Sensors <span style={{ color: "red" }}>*</span>{" "}
    </Label>

    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id="chok"
        name="sensors"
        type="checkbox"
        value="Shock"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="chok">
        Shock
      </label>
    </div>
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id="Position"
        name="sensors"
        type="checkbox"
        value="Position"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="Position">
        Position
      </label>
    </div>
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id="Level"
        name="sensors"
        type="checkbox"
        value="Level"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="Level">
        Level
      </label>
    </div>
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id="Smoke"
        name="sensors"
        type="checkbox"
        value="Smoke"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="Smoke">
        Smoke
      </label>
    </div>
    <div className="custom-control custom-checkbox mb-3">
      <input
        className="custom-control-input"
        id="Humidity"
        name="sensors"
        type="checkbox"
        value="Humidity"
        onChange={onChangeHandler}
      />
      <label className="custom-control-label" htmlFor="Humidity">
        Humidity
      </label>
    </div>
  </FormGroup>
</Col>


          </Row>
          {/*Optional features  */}
          <Row>
            <Col md="12">
             <h1>Optional features</h1>
             </Col>

        </Row>
        <Row
          style={{marginTop:20}}
          >
           <Col md="4">
  <FormGroup>
    <Label>
    Graphic wraps
    </Label>
    <div className="custom-control custom-radio mb-3">
    <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>
      
    </div>
    
    
  </FormGroup>
</Col>
         <Col md="4">
              <FormGroup
              >
              <Label>
              
Advertisement signage  </Label>
              <div className="custom-control custom-radio mb-3">
              <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"/>
          
        </div>
       
        
              </FormGroup>

         </Col>
         <Col md="4">
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
          WI-FI router
          </label>
        </div>
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
          Mounting bracket
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
          Ashtray
          </label>
        </div>
              </FormGroup>

         </Col>
     


          </Row>
  <Row>
    <Col>
    <button type="submit" className="btn btn-outline-primary">
                  Save <i className="fa-solid fa-floppy-disk"></i>
                </button></Col>
  </Row>
</form>
</>

  );
}

export default QuoteForm;