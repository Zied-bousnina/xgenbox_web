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
  Col,
  Table,
  Media,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal
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
import { FetchPointBinByID } from "Redux/actions/BinAction";
import { useParams } from "react-router-dom";
import { SET_POINTBIN_DETAILS } from "Redux/types";
import { DeletePointBinByIDFromPointBin } from "Redux/actions/BinAction";

const PointBinDetails = () => {
  const profile = useSelector(state=>state?.profile?.profile)
  const error = useSelector(state=>state.error?.errors)
  
  
const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const ListOfQuote= useSelector(state=>state?.quote?.quote?.quotes)
  const PointBinDetails= useSelector(state=>state?.PointBinDetails?.PointBinDetails)
  const ListOfBinsNotInUse= useSelector(state=>state?.ListOfBinsNotInPointBin?.ListOfBinsNotInPointBin)
  const [selectedBins, setSelectedBins] = useState([]);
  const [governorates, setgovernorates] = useState([]);
const [selectedValue, setSelectedValue] = useState('Tunis');
  const [selectedMunicipal, setMunicipal] = useState('Tunis');
  const [notificationModal, setnotificationModal] = useState(false)
  const [selectedItem, setselectedItem] = useState(null)
  const dispatch = useDispatch()

  const { id } = useParams();
 
  dispatch({
    type:SET_IS_SECCESS,
    payload:false
})

useEffect(() => {
  dispatch(FetchPointBinByID(id))
 
}, [PointBinDetails])
 
 
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
    console.log({...form, governorate: selectedValue, municipale: selectedMunicipal})

    
  dispatch(AddPointBin({...form, governorate: selectedValue, municipale: selectedMunicipal}))

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
  useEffect(() => {
    axios
      .get(`https://xgenboxv2.onrender.com/api/governorates`)
      .then(res => {
        setgovernorates(res.data[0]);
      })
      .catch(err => console.log(err));
  }, []);

   const municipales = governorates?.governorates?.filter(
    (item, index) => item.name === selectedValue,
  );
  const deleteBin = (idBin)=> {
    
    console.log("selectedItem", selectedItem)
    dispatch(DeletePointBinByIDFromPointBin(selectedItem, id))
    // if(isSuccess){

    //   startTimer()
    // }
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
                    <h3 className="mb-0">Create Point bin</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Link
                          to={`/admin/edit-Point-bin/${id}`}
                          >

                    <Button
                      // color="primary"
                    
                      size="md"
                      >  Edit Point bin
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
      <label className="form-label  ">address </label>
      <div className="input-group">
         
         <h4>{PointBinDetails?.address}</h4>
        
        {/* <input type="text" required defaultValue={PointBinDetails&&PointBinDetails?.address} name={"address"} className={classNames("form-control")} onChange={onChangeHandler} /> */}
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
      <label className="form-label">Governorate<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <h4>
      {PointBinDetails?.governorate}
      </h4>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">Municipal<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
        
        {/* {
          errors && (<div  className="invalid-feedback">
          {errors}
        </div>)
        } */}
      <h4>
      {PointBinDetails?.municipale}
      </h4>
      </div>
    </div>
    </Col>
    
  </Row>
  <Row>
    <Col 
    md="6"
    >
       <div className=" mb-3">
      <label className="form-label">latitude <span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
      <h4>
      {PointBinDetails?.lat}
      </h4>
      </div>
    </div>
    </Col>
    <Col 
    md="6"
    >
       <div className=" mb-">
      <label className="form-label">Longitude<span style={{color:"red"}}>*</span></label>
      <div className="input-group">
        
      <h4>
      {PointBinDetails?.long}
      </h4>
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
        <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Tel</th>
                    <th scope="col">city & country</th>
                    <th scope="col">Company name</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                
                    
                    
                  <tr>

                    <th scope="row">
                    <Media className="align-items-center">
                      
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            {/* {request?.name} */}
                            {PointBinDetails?.quoteDemande?.name}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                    {/* {request?.email} */}
                    {PointBinDetails?.quoteDemande?.email}
                      </td>
                    <td>

                    {PointBinDetails?.quoteDemande?.tel}
                    {/* {request?.tel} */}
                    </td>
                    <td>
                    {/* {request?.city} / {request?.country} */}
                    {PointBinDetails?.quoteDemande?.city} / {PointBinDetails?.quoteDemande?.country}
                    </td>
                    <td>
                    <td>
                    {PointBinDetails?.quoteDemande?.companyName}
                    </td>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                          >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          
                          <Link
                          to={`/admin/quote-details/${PointBinDetails?.quoteDemande?._id}`}
                          >
                            {/* {PointBinDetails?.quoteDemande?.city} */}
                          <DropdownItem
                            // href="#pablo"
                            // onClick={()=>PutRequest("valid", request?._id)}
                          >
                            Show details
                          </DropdownItem>
                            </Link>
                          {/* <DropdownItem
                            href="#pablo"
                            onClick={() => setnotificationModal(true)}
                          >
                            Block
                          </DropdownItem> */}
                       
                          {/* <DropdownItem
                            href="#pablo"
                            onClick={() => this.toggleModal("notificationModal")}
                            >
                            Something else here
                          </DropdownItem> */}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  
               
                 
                
                </tbody>
              </Table>
     
      </div>
    </div>
    </Col>
    
    
  </Row>
  <hr/>
  <h3>Bins</h3>
  <Row>
        <Col md="12">
          <div className="mb-3">
            
            <div className="input-group">
            <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">gaz</th>
                    <th scope="col">level</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {PointBinDetails?.bins?.map((request) => (
                    
                    
                  <tr>

                    <th scope="row">
                    <Media className="align-items-center">
                      
                        
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            {request?.name}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                    {request?.address}
                      </td>
                    <td>
                    {request?.gaz}
                    </td>
                    <td>
                    {request?.niv} 
                    </td>
                    <td>
                      
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {!request?.status ? (
                        <>
<i className="bg-success" />
is open now
                        </>
                        
                      ) : (
                        <>

<i className="bg-danger" />
is Closed
                        </>
                        
                      )
                        }
                        {/* <i className="bg-success" /> */}
                      </Badge>
                    </td>
                    </td>
                    <td>
                    <td>
              <Button
  color={`${request?.status ? "success" : "primary"}`}
  // onClick={request?.status ? () => Unblock(request?._id) : () => block(request?._id)}
  size="sm"
  disabled={!request?.status }
>
  {isLoad && selectedItem === request?._id ? (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden"></span>
    </div>
  ) : (
    !request?.status ? (
      <div>
        {/* {count} */}
        Closing in 10s
      </div>
    ) : (
      "Open It"
    )
  )}
</Button>
                    </td>
                    <td>
                      <div>

                  
    </div>
                    </td>
                    </td>
                    <td className="text-right">
                    <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={notificationModal}
              // toggle={() => this.toggleModal("notificationModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-notification">
                  Your attention is required
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setnotificationModal(false)}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="py-3 text-center">
                  <i className="ni ni-bell-55 ni-3x" />
                  <h4 className="heading mt-4">You should read this!</h4>
                  <p>
                    When you click on "Ok , Got it" the request will be deleted {selectedItem}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={()=>deleteBin(selectedItem)}
                >
                  {isLoad ? (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden"></span>
    </div>
  )
                  :
                  "Ok, Got it"
                  }
                  {/* Ok, Got it */}
                </Button>
                <Button
                  className="text-white ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => setnotificationModal(false)}
                >
                  Close
                </Button>
              </div>
            </Modal>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                          >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          
                          <Link
                          to={`/admin/bin-details/${request?._id}`}
                          >
                          <DropdownItem
                            // href="#pablo"
                            // onClick={()=>PutRequest("valid", request?._id)}
                            // disabled
                          >
                            Show details
                          </DropdownItem>
                          </Link>
                          <DropdownItem
                            // href="#pablo"
                            onClick={()=>{

                              setnotificationModal(true)
                             
                              setselectedItem(request?._id)
                            } 
                            }
                            // disabled
                          >
                            Delete Bin
                          </DropdownItem>
                          
                          {/* <DropdownItem
                            href="#pablo"
                            onClick={() => setnotificationModal(true)}
                          >
                            Block
                          </DropdownItem> */}
                   
                          {/* <DropdownItem
                            href="#pablo"
                            onClick={() => this.toggleModal("notificationModal")}
                            >
                            Something else here
                          </DropdownItem> */}
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  
                  )) || []}
                 
                
                </tbody>
              </Table>
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
 
 
  
  

  
  
</form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PointBinDetails;
