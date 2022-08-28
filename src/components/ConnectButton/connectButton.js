import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdb-react-ui-kit";

import "./connectButton.styles.scss";
// import AccountPopper from "./../accountPopper/popper";
const ConnectButton = () => {
  const [account, setAccount] = useState();
  const [copyText, setCopy] = useState("Copy");

  useEffect(() => {
    let acc = sessionStorage.getItem("account");
    if (acc) {
      setAccount(acc);
    }
    window.ethereum.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
      sessionStorage.setItem("account", accounts[0]);
    });
  }, []);
  const copy = () => {
    navigator.clipboard.writeText(account);
    setCopy("Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 2000);
  };
  const disconnect = () => {
    setAccount(null);
    sessionStorage.removeItem("account");
  };

  const connect = async () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        setAccount(result[0]);
        sessionStorage.setItem("account", result[0]);
      });
  };

  if (account) {
    return (
      <div className="account">
        <MDBPopover
          className="btn"
          id="btn"
          size="lg"
          btnChildren={`${account.slice(0, 4)}...${account.slice(38)}`}
        >
          <MDBPopoverHeader id="chainInfo">
            Account (Binance Smart Chain)
          </MDBPopoverHeader>
          <MDBPopoverBody id="address">{account}</MDBPopoverBody>
          <MDBBtn id="popoverButtonsCopy" onClick={copy}>
            {copyText}
          </MDBBtn>
          <MDBBtn id="popoverButtonsDisconnect" onClick={disconnect}>
            Disconnect
          </MDBBtn>
        </MDBPopover>
      </div>
    );
  } else {
    return (
      <div>
        <MDBBtn className="connectButton" id="btn" onClick={connect}>
          Connect
        </MDBBtn>
      </div>
    );
  }
};
export default ConnectButton;
