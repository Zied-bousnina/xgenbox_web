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
import { getBinsCount } from "Redux/actions/Statistiques.action";
import { getUsersCounts } from "Redux/actions/Statistiques.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";



const Header = () => {
  const dispatch = useDispatch()
  const userStatistiques = useSelector(state=>state?.userStatistiques?.statistiques)
  const BinStatistiques = useSelector(state=>state?.binStatistiques?.statistiques)

useEffect(() => {
  dispatch(getUsersCounts())
  dispatch(getBinsCount())
},[userStatistiques, BinStatistiques] )

const user = userStatistiques?.byRole?.filter(el => el.role === "USER") || [];
const municipal = userStatistiques?.byRole?.filter(el => el.role === "MUNICIPAL") || [];

const allUser = userStatistiques?.total
// console.log(user[0]?.currentDayCount)


  return (
    <>
      <div className="header bg-gradient-green pb-8 pt-5 pt-md-8 ">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Bins count
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                         {BinStatistiques?.totalCount}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                          <i className="fas fa-trash" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "} */}
                      <span className={`${BinStatistiques?.percentageIncrease >0 ? "text-success": "text-danger"} mr-2`}>
                         {BinStatistiques?.percentageIncrease >0 ? <i className="fa fa-arrow-up" />:<i className="fas fa-arrow-down" />   }  {BinStatistiques?.percentageIncrease}%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Users Count
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{allUser?.totalCount}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className={`${allUser?.percentageIncrease >0 ? "text-success": "text-danger"} mr-2`}>
                         {allUser?.percentageIncrease >0 ? <i className="fa fa-arrow-up" />:<i className="fas fa-arrow-down" />   }  {allUser?.percentageIncrease}%
                      </span>{" "}
                      <span className="text-nowrap">Since last yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          MUNICIPALs count
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{municipal[0]?.totalCount}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-truck" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-warning mr-2"> */}
                      <span className={`${municipal[0]?.percentageIncrease >0 ? "text-success": "text-danger"} mr-2`}>
                         {municipal[0]?.percentageIncrease >0 ? <i className="fa fa-arrow-up" />:<i className="fas fa-arrow-down" />   }  {municipal[0]?.percentageIncrease}%
                        {/* <i className="fas fa-arrow-down" /> {municipal[0]?.percentageIncrease}% */}
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
