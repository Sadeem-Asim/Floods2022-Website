import { MDBBtn } from "mdb-react-ui-kit";
import "./donateButton.scss";
const DonateButton = ({ text }) => {
  return <MDBBtn id="donate-button">{text}</MDBBtn>;
};

export default DonateButton;
