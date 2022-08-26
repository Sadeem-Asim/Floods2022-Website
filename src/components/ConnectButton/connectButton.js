import { useState, useEffect } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Modal from "./../accountModal/accountModal";
import "./connectButton.styles.scss";
const ConnectButton = () => {
  const [account, setAccount] = useState();
  const [modalStatus, setModalStatus] = useState(false);
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
      <div
        className="account "
        onClick={() => {
          setModalStatus(!modalStatus);
        }}
      >
        <Modal modalStatus={modalStatus} />
        <MDBBtn className="btn" id="btn">
          {account.slice(0, 4)}...{account.slice(38)}
        </MDBBtn>
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
