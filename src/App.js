import "./App.css";
// import { useMoralis } from "react-moralis";
// import { Button } from "web3uikit";
// import { useEffect } from "react";

function App() {
  // const { isAuthenticated, chainId, connector, Moralis } = useMoralis();
  // console.log(isAuthenticated, chainId, connector);
  const login = async () => {
    console.log("loginClicked");
    // const user = await Moralis.Web3.authenticate();
    // if (!user) {
    //   console.log("No User");
    // }
  };
  login();
  return (
    <div className="App">
      <button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Hello
      </button>
    </div>
  );
}

export default App;
// {
//   /* <Blockie spotColor="red" seed={account} />
//       <CryptoCards
//         chain="polygon"
//         bgColor="blue"
//         chainType="Testnet"
//         onClick={(data) => {
//           console.log("Data : ", data);
//         }}
//       /> */
// }
