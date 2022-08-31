import { useEffect, useState } from "react";
import "./header.scss";
import ConnectButton from "./../../components/ConnectButton/connectButton";
import Logo from "../../components/Logo/logo";
// import { Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";

const Header = () => {
  const [headerAbsolute, setHeaderFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
  });
  const listenScroll = () => {
    if (window.scrollY > 40) {
      setHeaderFixed(true);
    } else if (window.scrollY < 40) {
      setHeaderFixed(false);
    }
  };
  return (
    <>
      <div className={`header ${headerAbsolute ? "header-fixed" : ""}`}>
        <MDBContainer className="header-container d-flex">
          <div className=" logo">
            <Logo />
          </div>
          {/* <div className="p-2 flex-grow-1 menu">
            <div className="menu-item">
              <Link className="link" to="#">
                Menu
              </Link>
            </div>
            <div className="menu-item">
              <Link className="link" to="#">
                Document
              </Link>
            </div>
            <div className="menu-item">
              <Link className="link" to="#">
                Marketplace
              </Link>
            </div>
            <div className="menu-item">
              <Link className="link" to="#">
                Stake
              </Link>
            </div>
            <div className="menu-item">
              <Link className="link" to="#">
                Audit
              </Link>
            </div>
          </div> */}
          <div className=" connectButton">
            <ConnectButton />
          </div>
        </MDBContainer>
      </div>
    </>
  );
};
export default Header;
// {
/* <div className="d-flex">
<div className="p-2 flex-fill">Flex item with a lot of content</div>
<div className="p-2 flex-fill">Flex item</div>
<div className="p-2 flex-fill">Flex item</div>
</div> */
// }
