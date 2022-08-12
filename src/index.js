import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18next";
import { AppProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={"loading"}>
      <AppProvider>
        <App />
      </AppProvider>
    </React.Suspense>
  </React.StrictMode>
);
