import { Col, Row } from "reactstrap";
import CardM from "./CardM";

function WhereToSettleCity() {
 
  const images = [
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/streets.png',
    name: 'Streets',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/stations.png',
    name: 'Stations',
    }, 
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/parc.png',
    name: 'Parks',
    },
    {
      imageURL:
      'https://xgenbox.com/wp-content/uploads/2023/04/beach.png',
    name: 'Beaches',
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

export default WhereToSettleCity;