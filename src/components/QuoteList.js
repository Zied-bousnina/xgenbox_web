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
import { FetchAllQuote } from 'Redux/actions/QuoteAction';
function QuoteList() {
  const [copiedText, setCopiedText] = useState();
  const profile = useSelector(state=>state?.profile?.profile)
  const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest )
  const ListOfUsers = useSelector(state=>state?.users?.users)
  const ListOfQuote= useSelector(state=>state?.quote?.quote?.quotes)
  console.log(ListOfUsers)
    const [notificationModal, setnotificationModal] = useState(false)
  console.log(requestsMunicipal)


  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(FetchAllQuote())
   
  }, [ListOfQuote])

  console.log(ListOfQuote)
  
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
                <h3 className="mb-0">List Of all Quote request</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Tel</th>
                    <th scope="col">city & country</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {ListOfQuote &&ListOfQuote?.map((request) => (
                    
                    
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
                    {request?.email}
                      </td>
                    <td>
                    {request?.tel}
                    </td>
                    <td>
                    {request?.city} / {request?.country}
                    </td>
                    <td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {request?.status ==="readed" ? (
                        <>
<i className="bg-primary" />
                        Readed
                        </>
                        
                      ) : (
                        <>

<i className="bg-danger" />
                        Unreaded
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
                          to={`/admin/quote-details/${request?._id}`}
                          >
                          <DropdownItem
                            // href="#pablo"
                            // onClick={()=>PutRequest("valid", request?._id)}
                          >
                            Show details
                          </DropdownItem>
                            </Link>
                          <DropdownItem
                            href="#pablo"
                            onClick={() => setnotificationModal(true)}
                          >
                            Block
                          </DropdownItem>
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
                    When you click on "Ok , Got it" the request will be deleted
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={()=>PutRequest("denied", request?._id)}
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
            </Modal>
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

export default QuoteList