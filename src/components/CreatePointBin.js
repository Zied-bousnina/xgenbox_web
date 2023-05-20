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
import { SET_IS_SECCESS } from "Redux/types";
import {Link} from "react-router-dom"
import { FetchAllQuote } from "Redux/actions/QuoteAction";
import { FetchAllBinsNotInUse } from "Redux/actions/BinAction";
import { AddPointBin } from "Redux/actions/BinAction";
const CreateBinPoint = () => {
  const profile = useSelector(state=>state?.profile?.profile)
  const error = useSelector(state=>state.error?.errors)
  
  
const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const ListOfQuote= useSelector(state=>state?.quote?.quote?.quotes)
  const ListOfBinsNotInUse= useSelector(state=>state?.ListOfBinsNotInPointBin?.ListOfBinsNotInPointBin)
  const [selectedBins, setSelectedBins] = useState([]);
  const dispatch = useDispatch()

  dispatch({
    type:SET_IS_SECCESS,
    payload:false
})

useEffect(() => {
  dispatch(FetchAllQuote())
 
}, [ListOfQuote])
 
 
  const showToastMessage = () => {
    toast.success('Bin created successfully.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
  }
  
 
  
  
  
  
  const [form, setForm] = useState({
    bins:[]
  })
  
  const onChangeHandler = (e) => {
    const { name, checked, value } = e.target;

  
    if (name === "bin1" || name === "bin2" || name === "bin3" || name === "bin4") {
      
      setForm({ ...form, bins: [...form.bins, value] });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  
    console.log(form);
  };
  useEffect(() => {
    if (isSuccess) {
      
      showToastMessage()
    }
  }, [isSuccess])

  useEffect(() => {
    dispatch(FetchAllBinsNotInUse())
   
  }, [ListOfBinsNotInUse])

  // console.log(ListOfBinsNotInUse)
  

  const onSubmit = (e)=>{
    
    e.preventDefault();
    console.log(form)

    
  dispatch(AddPointBin(form))

  // !error?.success ? showErrorToastMessage() : null
 

    
   
      // showToastMessage()
      setSelectedBins([])
      e.target.reset();
   
  
  }

  const handleBinChange = (selectedBin, index) => {
    // Update selected bins
    const updatedBins = [...selectedBins];
    updatedBins[index] = selectedBin;
    setSelectedBins(updatedBins);
  };

  const renderBinOptions = (index) => {
    const availableBins = ListOfBinsNotInUse?.filter(
      (bin) => !selectedBins?.includes(bin._id)
    );
    return availableBins?.map((bin) => (
      <option key={bin._id}   value={bin._id}>
        {bin.type}
      </option>
    ));
  };
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
                    <h3 className="mb-0">Create Point bin</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Link
                          to={`/admin/AddBin`}
                          >

                    <Button
                      // color="primary"
                    
                      size="md"
                      >  create bin
                      <i className=" ml-2 fas fa-arrow-right" />
                    </Button>
                      </Link>
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
    md="12"
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
    md="12"
    >
       <div className=" mb-3">
      <label className="form-label">Quote request<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <select name={"quoteDemande"} required className={classNames("form-control")} onChange={onChangeHandler}>
        
            <option value={""}>--Select Quote request ---</option>
            {
              ListOfQuote?.map(l=>{
                return(
                  <option value={l._id}>{l.name}/ {l.email}/ {l.city}/ {l.country}</option>
                )
              })
            }
            
        
      </select>
      </div>
    </div>
    </Col>
    
    
  </Row>
  <hr/>
  <h3>Bins</h3>
  <Row>
        <Col md="12">
          <div className="mb-3">
            <label className="form-label">
              Bin 1
              {selectedBins[0] && (
                <span style={{ color: "red" }}>*</span>
              )}
            </label>
            <div className="input-group">
              <select
                name="bin1"
                required
                className="form-control"
                onChange={(e) => {handleBinChange(e.target.value, 0)


                   onChangeHandler(e)}}
              >
                <option value="0">-- Select Bin 1 --</option>
                {renderBinOptions(0)}
              </select>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <div className="mb-3">
            <label className="form-label">Bin 2</label>
            <div className="input-group">
              <select
                name="bin2"
                className="form-control"
                onChange={(e) => {handleBinChange(e.target.value, 1)
                  onChangeHandler(e)
                }}
                disabled={!selectedBins[0]}
              >
                <option value="">-- Select Bin 2 --</option>
                {renderBinOptions(1)}
              </select>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <div className="mb-3">
            <label className="form-label">Bin 3</label>
            <div className="input-group">
              <select
                name="bin3"
                className="form-control"
                onChange={(e) => {handleBinChange(e.target.value, 2)
                  onChangeHandler(e)
                }}
                disabled={!selectedBins[1]}
              >
                <option value="">-- Select Bin 3 --</option>
                {renderBinOptions(2)}
              </select>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12">
          <div className="mb-3">
            <label className="form-label">Bin 4</label>
            <div className="input-group">
              <select
                name="bin4"
                className="form-control"
                onChange={(e) => {handleBinChange(e.target.value, 3)
                  onChangeHandler(e)
                }}
                disabled={!selectedBins[2]}
              >
                <option value="">-- Select Bin 4 --</option>
                {renderBinOptions(3)}
              </select>
            </div>
          </div>
        </Col>
      </Row>
  <Row>
    <Col>
    
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

export default CreateBinPoint;
