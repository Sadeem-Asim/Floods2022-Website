//
//
//
//

import "./dButton.scss";
import { Link } from "react-router-dom";
const DButton = ({ text }) => {
  return (
    <Link to="#" className="dButton">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </Link>
  );
};

export default DButton;
