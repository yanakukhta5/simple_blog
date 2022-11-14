import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ThemeContextProvider } from "./providers/ThemeContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContextProvider>
  </React.StrictMode>
);
