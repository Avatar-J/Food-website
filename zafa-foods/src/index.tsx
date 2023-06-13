import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
