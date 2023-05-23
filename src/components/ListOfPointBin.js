import React, { useEffect } from 'react'
import { useState } from "react";
// react component that copies the given text inside your clipboard

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Table,
  Media,
  Badge,
  Progress,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Modal
} from "reactstrap";
import Header from './Headers/Header';
import { useDispatch, useSelector } from 'react-redux';
import { findDemandeInProgress } from 'Redux/actions/MunicipalRequest.Action';
import { UpadeteRequest } from 'Redux/actions/MunicipalRequest.Action';
import { GetAllUsers } from 'Redux/actions/userAction';
// core components
import {Link} from "react-router-dom"
import { BlockUser } from 'Redux/actions/userAction';
import { FetchAllBins } from 'Redux/actions/BinAction';
import { UpdateBinStatus } from 'Redux/actions/BinAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchAllPointBins } from 'Redux/actions/BinAction';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';


function ListOfPointBin() {
  const [copiedText, setCopiedText] = useState();
  const profile = useSelector(state=>state?.profile?.profile)
  const listOfBins = useSelector(state=>state?.ListOfBins?.ListOfBins?.bins)
  const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest )
  const ListOfUsers = useSelector(state=>state?.users?.users)
  const ListOfPointBins = useSelector(state=>state?.ListOfPointBins?.ListOfPointBins?.pointBins)
  const isLoad = useSelector(state=>state?.isLoading?.isLoading)
  const isSuccess = useSelector(state=>state?.success?.success)
  const [selectedItem, setselectedItem] = useState(null)
  const dispatch = useDispatch()
  const [count, setCount] = useState(10);

  const data = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more data as needed
  ];
  
  // PDF component
const PDFDocument = ({data}) => {
  // console.table(data)

  return  (
    <Document>
    <Page>
      {/* {data?.map(item => ( */}
     {/* <QRCodeSVG
  value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "https://static.zpao.com/favicon.png",
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    excavate: true,
  }}
/> */}
        {/* ))} */}
    </Page>
  </Document>
);

}

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const startTimer = () => {
    setCount(10);
  };
  

  // console.log(ListOfUsers)
    const [notificationModal, setnotificationModal] = useState(false)
  // console.log(requestsMunicipal)



  
  useEffect(() => {
    dispatch(FetchAllPointBins())
   
  }, [ListOfPointBins])
  // console.log(ListOfPointBins)
  
  const PutRequest = (status, id)=> {
    // alert("accept", status)
    dispatch(UpadeteRequest({status, id}))
    console.log(status)
    setnotificationModal(false)

  }
  const showToastMessage = () => {
    toast.success('Request sent successfully.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
    });
  }
  useEffect(() => {
    if (isSuccess) {
      
      showToastMessage()
    }
  }, [isSuccess])
  const block = (id)=>{
    console.log('block')
    setselectedItem(id)
    dispatch(UpdateBinStatus(id))
    if(isSuccess){

      startTimer()
    }
  }
  const Unblock = (id)=>{
    console.log("Unblock")
    // dispatch(UnBlockUser(id))
    setselectedItem(id)
    dispatch(UpdateBinStatus(id))
    // startTimer()
    if(isSuccess){

      startTimer()
    }

    

  }
  
  
  
  return (
    <>
    <Header />
    {/* Page content */}
    <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <Col 
                  // lg="6"
                    md="9" 
                  >
                <h3 className="mb-0">List Of all Point Bins</h3>
                  </Col>
                  <Col 
                  // lg="6"
                    md="3" 
                  >
                     <Link
                          to={`/admin/Add-Point-Bin`}
                          >
                            <Button
                            className="float-right"
                            // color="primary"
                            >


                Add Bin Point<i className=" ml-2 fas fa-arrow-right" />
                            </Button>
                          </Link>
                  </Col>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name/ Company Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Access code</th>
                    <th scope="col">Type Of bins</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {ListOfPointBins &&ListOfPointBins?.map((request) => (
                    
                    
                  <tr>

                    <th scope="row">
                    <Media className="align-items-center">
                      
                        
                       
                        <Media>
                          <span className="mb-0 text-sm">
                            {request?.quoteDemande?.name} / {request?.quoteDemande?.companyName}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                    {request?.address}
                      </td>
                    <td>
                    {request?.quoteDemande?.tel}
                    </td>
                    <td>
                    {request?.code} 
                    </td>
                    <td>
                    <td>
                      {
                        request?.bins?.map((bin)=>(
                          <div>
                            {bin?.type}
                          </div>
                        ))
                      }
                    </td>
                    </td>
                    <td>
                    <td>
              <Button
  color={`${!request?.status ? "success" : "primary"}`}
  // onClick={request?.status ? () => Unblock(request?._id) : () => block(request?._id)}
  size="sm"
  
>
  <PDFDownloadLink document={<PDFDocument data={request} />} fileName={request?.quoteDemande?.name}>
{({ blob, url, loading, error }) =>
// loading ? 'Loading document...' : 'Download Pdf'
'Download details'
 
}
</PDFDownloadLink>
</Button>
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
                          to={`/admin/user-details/${request?.user?._id}`}
                          >
                          <DropdownItem
                            // href="#pablo"
                            // onClick={()=>PutRequest("valid", request?._id)}
                            disabled
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
                          {/* <Modal
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
                    When you click on "Ok , Got it" the request will be deleted
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={()=>block( request?._id)}
                >
                  Ok, Got it
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
            </Modal> */}
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
              <CardFooter className="py-4">
                <nav aria-label="...">
                  {/* <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                  <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination> */}
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
       
      </Container>
  </>
  )
}

export default ListOfPointBin