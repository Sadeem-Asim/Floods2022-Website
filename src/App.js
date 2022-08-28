import "./App.css";
// import Connect from "./components/ConnectButton/connectButton";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

// import { useEffect } from "react";
function App() {
  const { chainId, account, isAuthenticated } = useMoralis();
  console.log(chainId, account, isAuthenticated);

  useEffect(() => {
    const switchNetwork = () => {
      if (isAuthenticated) {
        if (chainId === "0x61") {
        } else {
          alert("Change Your Network");
        }
      }
    };
    switchNetwork();
  }, [account, chainId, isAuthenticated]);
  return (
    <div className="App">
      <ConnectButton />
    </div>
  );
}

export default App;
