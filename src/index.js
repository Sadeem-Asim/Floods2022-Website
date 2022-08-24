import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

const root = ReactDOM.createRoot(document.getElementById("root"));
const serverUrl = "https://vfhclvnaexqw.usemoralis.com:2053/server";
const appId = "B0XSylN76sxgSbJ9HjeuN7BnRSgGv5i0SowqSMJL";

root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);
