import ConnectButton from "./components/ConnectButton/connectButton";
import DonateButton from "./components/DonateButton/donateButton";

import { FiAlertTriangle } from "react-icons/fi";
import "./home.styles.scss";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import pic1 from "./assets/images/floodPic-2.jpg";
const Home = () => {
  return (
    <>
      <section className="header">
        <MDBContainer className="header-container">
          <MDBTypography variant="h1" className="header-logo">
            Crypto For Flood
          </MDBTypography>
          {/* <div className="header-menu">
            <MDBTypography variant="h2" className="header-menu-items">
              Who we Are?
            </MDBTypography>
            <MDBTypography variant="h2" className="header-menu-items">
              Why Crypto?
            </MDBTypography>
            <MDBTypography variant="h2" className="header-menu-items">
              What's Happening?
            </MDBTypography>
          </div> */}
          <ConnectButton />
        </MDBContainer>
      </section>
      <section className="emergencyAlertSection">
        <MDBContainer>
          <MDBTypography variant="p" className="emergencyAlertSection-title">
            Emergency Alert{" "}
            <FiAlertTriangle className="emergencyAlertSection-title-icon" />
          </MDBTypography>
          <MDBTypography
            variant="p"
            className="emergencyAlertSection-description"
          >
            Flood 2022 All the villages along the 300 km stretch from Ramak to
            Kashmore and 50 km from the Indus Highway to the mountain are
            submerged in Pakistan. Not a single village is left. Loss of
            billions, hundreds of deaths. The biggest flood in the history of
            Mount Sulaimani which caused so much destruction.
          </MDBTypography>
          <div className="emergencyAlertSection-button">
            <DonateButton text="Donate Now" />
          </div>
        </MDBContainer>
      </section>
      <section className="floodReview">
        <img src={pic1} alt="img" className="floodReview-background" />
        <MDBContainer className="floodReview-container">
          <MDBTypography variant="p" className="floodReview-description">
            <span>NOW MORE THAN EVER,</span>
            <span>PEOPLE NEED YOUR HELP</span>
            <span>TO SURVIVE AND THRIVE</span>
          </MDBTypography>
          <div className="floodReview-button">
            <DonateButton text="Donate Today" />
          </div>
        </MDBContainer>
      </section>
    </>
  );
};

export default Home;
