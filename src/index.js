import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.scss";
if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
