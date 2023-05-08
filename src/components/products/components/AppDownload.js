
import {
  GooglePlayButton,
  AppGalleryButton,
  ButtonsContainer,
} from "react-mobile-app-button";
import { Col, Row } from "reactstrap";
export default function AppDownload() {
  const APKUrl =
  "https://play.google.com/store/apps/details?id=host.exp.exponent";
const iOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    // <Container maxWidth="md" sx={{ mt: 20 }}>
    
    <Row
    style={{
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px",
      marginRight: "20px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <GooglePlayButton
      url={APKUrl}
      theme={"dark"}
      className={"custom-style m-5"}
      style={{ marginRight: "10px",  }} // add right margin
      
    />
    <AppGalleryButton
      url={iOSUrl}
      theme={"light"}
      className={"custom-style m-5 "}
      style={{ marginLeft: "10px" }} // add left margin
    />
  </Row>
  
  );
}