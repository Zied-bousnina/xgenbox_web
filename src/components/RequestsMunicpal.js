import React, { useEffect, useRef } from 'react'
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
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
// core components
import { useHistory } from 'react-router-dom';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button as Btn} from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
function RequestsMunicpal() {
  const [copiedText, setCopiedText] = useState();
  const profile = useSelector(state=>state?.profile?.profile)
  const requestsMunicipal = useSelector(state=>state?.MunicipaRequest?.MunicipalRequest
    )
    const [notificationModal, setnotificationModal] = useState(false)
  console.log(requestsMunicipal)
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
      { field: 'municipal', header: 'Municipal' },
      { field: 'governorat', header: 'Governorate' },
      { field: 'description', header: 'Description' },
      { field: 'status', header: 'Status' }
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
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(findDemandeInProgress())
   
  }, [requestsMunicipal])
  
  const PutRequest = (status, id)=> {
    // alert("accept", status)
    dispatch(UpadeteRequest({status, id}))
    console.log(status)
    setnotificationModal(false)

  }
  
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
          onClick={()=>PutRequest("valid", rowData?._id)}
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
                <h3 className="mb-0">Municipal Requests  In progress</h3>
              </CardHeader>
              {/* <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Municipal</th>
                    <th scope="col">Governorate</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {requestsMunicipal &&requestsMunicipal?.map((request) => (
                    
                  <tr>
                    <th scope="row">
                      {request?.municipal}
                    </th>
                    <td>
                    {request?.governorat}
                      </td>
                    <td>
                    {request?.tel}
                    </td>
                    <td>
                    {request?.description}
                    </td>
                    <td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
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
                          <DropdownItem
                            
                            onClick={()=>PutRequest("valid", request?._id)}
                          >
                            Accept
                          </DropdownItem>
                          <DropdownItem
                          
                            onClick={() => setnotificationModal(true)}
                          >
                            Deny
                          </DropdownItem>
                          <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={notificationModal}
             
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
                    When you click on "Ok , Got it" the request will be deleted {selectedItem?._id}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={()=>PutRequest("denied", selectedItem?._id)}
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
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  )) || []}
                 
                
                </tbody>
              </Table> */}
              <Modal
              className="modal-dialog-centered modal-danger"
              contentClassName="bg-gradient-danger"
              isOpen={notificationModal}
             
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
                    When you click on "Ok , Got it" the request will be deleted {selectedItem?._id}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <Button className="btn-white" color="default" type="button"
                onClick={()=>PutRequest("denied", selectedItem?._id)}
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
              <div className="card">
              
              <Tooltip target=".export-buttons>button" position="bottom" />
              <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25]} ref={dt} value={requestsMunicipal} header={header} selection={selectedProduct}
              selectionMode={true}
              onSelectionChange={(e) => setSelectedProduct(e.data)}
              filters={filters} filterDisplay="menu" globalFilterFields={['_id','municipal', 'governorat', 'description', 'status', ]}
              onRowClick={
                (e) => {
             
                  const url = `/admin/municipal-details/${e.data._id}`;
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
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}>
                <div className="spinner-border text-light" role="status">
          <span className="visually-hidden"></span>
        </div>
                  
                </Column>
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

export default RequestsMunicpal