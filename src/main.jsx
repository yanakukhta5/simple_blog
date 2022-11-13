import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./providers/ThemeContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  //</React.StrictMode>
);
