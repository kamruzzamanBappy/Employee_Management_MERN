import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import authContext from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <authContext>
    <App />
  </authContext>
);
