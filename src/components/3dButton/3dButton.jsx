import "./dButton.scss";
import { Link } from "react-router-dom";
const DButton = ({ text1, text2 }) => {
  return (
    <Link to="#" className="dButton">
      <span className="front">{text1}</span>
      <span className="center"></span>
      <span className="back">{text2}</span>
    </Link>
  );
};

export default DButton;
