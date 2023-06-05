import React, { useEffect, useRef } from 'react'
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
import { Tooltip } from 'primereact/tooltip';
import { DataTable } from 'primereact/datatable';
import { Button as Btn} from 'primereact/button';
import { useHistory } from 'react-router-dom';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
function ListOfUsers() {
  const [copiedText, setCopiedText] = useState();
  const profile = useSelector(state=>state?.profile?.profile)
  const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest )
  const ListOfUsers = useSelector(state=>state?.users?.users)
  console.log(ListOfUsers)
    const [notificationModal, setnotificationModal] = useState(false)
  console.log(requestsMunicipal)


  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(GetAllUsers())
   
  }, [ListOfUsers])
  
  const PutRequest = (status, id)=> {
    // alert("accept", status)
    dispatch(UpadeteRequest({status, id}))
    console.log(status)
    setnotificationModal(false)

  }

  const history = useHistory();
  const dt = useRef(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
  });
  const [selectedItem, setselectedItem] = useState(null)
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cols = [
      { field: '_id', header: 'Id' },
      { field: 'address', header: 'Address' },
      { field: 'tel', header: 'Tel' },
      { field: 'city', header: 'city ' },
      { field: 'country', header: ' country' },
      // { field: 'status', header: 'Status' }
  ];
  const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
};
const saveAsExcelFile = (buffer, fileName) => {
  import('file-saver').then((module) => {
      if (module && module.default) {
          let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
          let EXCEL_EXTENSION = '.xlsx';
          const data = new Blob([buffer], {
              type: EXCEL_TYPE
          });

          module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }
  });
};
const onGlobalFilterChange = (e) => {
const value = e.target.value;
let _filters = { ...filters };

_filters['global'].value = value;

setFilters(_filters);
setGlobalFilterValue(value);
};
  

const header = (
  <>
  <Row>
      <Col >
      <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
              </span>
      </Col>
      <Col xs="auto">
      {/* <div className="flex align-items-center justify-content-end gap-2"> */}
      <Btn type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
      {/* <Btn type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
      <Btn type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" /> */}
      {/* </div> */}
      </Col>
  </Row>
 
  </>
);
const actionBodyTemplate = (rowData) => {
return (
    <React.Fragment>
      {/* <Link
                        to={`/admin/edit-bin/${rowData?._id}`}
                        > */}

        <Btn icon="pi pi-check" rounded outlined className="mr-2"
        onClick={()=>PutRequest("accepted", rowData?._id)}
          />
                        {/* </Link> */}
        <Btn icon="pi pi-times" rounded outlined severity="danger" onClick={()=>{
          setnotificationModal(true)
          setselectedItem(rowData)
        } } />
    </React.Fragment>
);
};
  
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
              {/* <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">Address</th>
                    <th scope="col">Tel</th>
                    <th scope="col">city & country</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {ListOfUsers &&ListOfUsers?.map((request) => (
                    
                    
                  <tr>

                    <th scope="row">
                    <Media className="align-items-center">
                      
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={request?.avatar}
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            {request?.user?.name}
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>
                    {request?.address}
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
                        
                          >
                            Show details
                          </DropdownItem>
                            </Link>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  
                  )) || []}
                 
                
                </tbody>
              </Table> */}

              <div className="card">
              
              <Tooltip target=".export-buttons>button" position="bottom" />
              <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25]} ref={dt} value={ListOfUsers} header={header} selection={selectedProduct}
              selectionMode={true}
              onSelectionChange={(e) => setSelectedProduct(e.data)}
              filters={filters} filterDisplay="menu" globalFilterFields={['_id','address', 'tel', 'city', 'country', ]}
              onRowClick={
                (e) => {
             
                  const url = `/admin/user-details/${e.data._id}`;
  history.push(url);
                }
              }
              
             
               sortMode="multiple"className="thead-light" tableStyle={{ minWidth: '50rem' }}>
                {/* <Column field="_id" header="ID" sortable className="thead-light" ></Column>
                <Column field="name" header="Name" sortable className="thead-light" ></Column>
                <Column field="address" header="Address" sortable style={{ width: '25%' }}></Column>
                <Column field="gaz" header="Gaz" sortable style={{ width: '25%' }}></Column>
                <Column field="niv" header="Level" sortable style={{ width: '25%' }}>
                  hjh
                </Column> */}
                {
                  cols.map(e=>{
                    return <Column field={e.field} header={e.header} sortable style={{ width: '25%' }}></Column>
                  })
                }
                
            </DataTable>
                </div>
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

export default ListOfUsers