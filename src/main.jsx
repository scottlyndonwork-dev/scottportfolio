import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import scottlogo from "./assets/scottlogo.png";

// Ensure favicon uses the project logo (scottlogo.png in src/assets)
const _setFavicon = (url) => {
  try {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url;
  } catch (e) {
    // ignore in non-browser environments
  }
};

_setFavicon(scottlogo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
