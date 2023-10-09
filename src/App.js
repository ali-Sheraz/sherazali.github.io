import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarHireBookingComponent from "./components/CarHireBookingComponent";
import LoginComponent from "./components/LoginComponent";
import RegistrationComponent from "./components/RegistrationComponent";


const App = () => {

  return (

    <div className="bg1">

      <Router>
     
        <Routes>
          {" "}
          <Route path="/" exact element={<LoginComponent />} />
          <Route path="carhire" element={<CarHireBookingComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="registration" element={<RegistrationComponent />} />


        </Routes>
     
      </Router>
    </div>
  );
};

export default App;
