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
function ListOfBins() {
  const [copiedText, setCopiedText] = useState();
  const profile = useSelector(state=>state?.profile?.profile)
  const listOfBins = useSelector(state=>state?.ListOfBins?.ListOfBins?.bins)
  const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest )
  const ListOfUsers = useSelector(state=>state?.users?.users)
  console.log(ListOfUsers)
    const [notificationModal, setnotificationModal] = useState(false)
  console.log(requestsMunicipal)


  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(FetchAllBins())
   
  }, [listOfBins])
  
  const PutRequest = (status, id)=> {
    // alert("accept", status)
    dispatch(UpadeteRequest({status, id}))
    console.log(status)
    setnotificationModal(false)

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
                <h3 className="mb-0">List Of all users</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">gaz</th>
                    <th scope="col">level</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {listOfBins &&listOfBins?.map((request) => (
                    
                    
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
                      {request?.user?.isBlocked ? (
                        <>
<i className="bg-danger" />
                        is Blocked
                        </>
                        
                      ) : (
                        <>

<i className="bg-success" />
                        Active
                        </>
                        
                      )
                        }
                        {/* <i className="bg-success" /> */}
                      </Badge>
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

export default ListOfBins