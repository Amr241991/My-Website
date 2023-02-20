// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

var React = require("react");
var ReactDOM = require("react-dom");
import Header from "./Header";
import List from "./List";
import "./styles.css";
import Footer from "./Footer";

// const imgs = "https://i.ibb.co/Jn8KXX8/664453abf963c72eb22cc2ad6432cef1.jpg";

ReactDOM.render(
  <div>
    <Header />

    <List />
    <Footer />
  </div>,
  document.getElementById("root")
);

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
