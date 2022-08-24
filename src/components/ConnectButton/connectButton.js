import { Button, Blockie } from "web3uikit";
import { useState, useEffect } from "react";
import { useMoralisWeb3Api, useMoralis } from "react-moralis";

import "./connectButton.styles.scss";
const ConnectButton = () => {
  const Web3Api = useMoralisWeb3Api();
  const { chainId } = useMoralis;
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
    const options = {
      address: "0xa3063bd0469482bac4219290365892a4e7747aea",
      from_block: "0",
    };
    const transactions = await Web3Api.account.getTransactions(options);
    console.log(transactions);
    console.log(chainId);
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
