import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App";
import { UIProvider } from "./state/UIContext";
import { FilesProvider } from "./state/FilesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <UIProvider>
      <FilesProvider>
        <App />
      </FilesProvider>
    </UIProvider>
  </React.StrictMode>
);
