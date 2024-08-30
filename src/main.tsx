import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./app/App";

import "./i18n";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
