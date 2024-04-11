import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./BookingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouteConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bookNow",
    element: <BookingPage />,
  },
]);
root.render(<RouterProvider router={appRouteConfig} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
