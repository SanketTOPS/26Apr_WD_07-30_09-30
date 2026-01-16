import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./components/Counter.jsx";
import ShowHidePassword from "./components/ShowHidePassword.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <ShowHidePassword />
  </StrictMode>
);
