import { Col, Row } from "reactstrap";
import CardM from "./CardM";

function WhereToInstallaPrivateOrganization() {
 
  const images = [
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/university.png',
    name: 'Universities',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/theme-parc.png',
    name: 'Theme parks',
    }, 
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/hospital.png',
    name: 'Hospitals',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/zoo.png',
    name: 'Zoos',
    }
  ]
 
  return (
<>
<Row>
  {
    images.map((image, index) => (
      <Col
      key={index}
      className="order-md-2"
      md="3"
      >
        <CardM imageURL={image.imageURL} name={image.name}/>
      </Col>
    ))
  }
 
 
</Row>
</>

  );
}

export default WhereToInstallaPrivateOrganization;