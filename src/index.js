import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://vfhclvnaexqw.usemoralis.com:2053/server"
      appId="B0XSylN76sxgSbJ9HjeuN7BnRSgGv5i0SowqSMJL"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
