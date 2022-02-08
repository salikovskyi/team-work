import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SizeProvider from "./context/SizeProvider";
import "./styles/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <SizeProvider>
      <App />
    </SizeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
