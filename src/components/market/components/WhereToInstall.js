import { Col, Row } from "reactstrap";
import CardM from "./CardM";

function WhereToInstall() {
 
  const images = [
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/commercial.png',
    name: 'Malls',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/aeroports.png',
    name: 'Airport',
    }, 
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/congress.png',
    name: 'Congress Palace',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/bureaux.png',
    name: 'Office complex',
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

export default WhereToInstall;