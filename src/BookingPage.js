import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function BookingPage(props) {
  const location = useLocation();
  return (
    <div className="book">
      <h1>!!! Thanks for Booking {location?.state?.data} !!!</h1>
    </div>
  );
}

export default BookingPage;
