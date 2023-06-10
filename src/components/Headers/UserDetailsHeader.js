
import { Button, Container, Row, Col } from "reactstrap";

const UserDetailsHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "200px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-green opacity-8" />
        {/* Header container */}
      
      </div>
    </>
  );
};

export default UserDetailsHeader;
