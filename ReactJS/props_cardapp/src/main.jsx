import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyCard from "./components/MyCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <MyCard pname="HP Laptop" price="50,000" desc="16GB RAM + 512 GB SSD" />
        <MyCard pname="Dell Laptop" price="58,000" desc="16GB RAM + 1 TB SSD" />
        <MyCard pname="Vivo Y21" price="20,000" desc="16GB RAM + 512 GB ROM" />
      </div>
    </div>
  </StrictMode>
);
