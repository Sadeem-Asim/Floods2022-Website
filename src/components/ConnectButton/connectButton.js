import { Button, Blockie } from "web3uikit";
import { useState, useEffect } from "react";

import "./connectButton.styles.scss";
const ConnectButton = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    let acc = sessionStorage.getItem("account");
    if (acc) {
      setAccount(acc);
    }
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
      <div className="account">
        <Blockie seed={account} />
        <Button disabled text={account} />
        <Button
          text="Disconnect"
          onClick={() => {
            setAccount(null);
          }}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Button
          className="connectButton"
          text="Connect Button"
          onClick={connect}
        />
      </div>
    );
  }
};
export default ConnectButton;
