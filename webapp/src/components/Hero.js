import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Medical Sample Project</h1>

    <p className="lead">
      This is a sample application for health technology.
    </p>
    <ul>
      <li>Patient can book/ cancel an appointment with a doctor.</li>
      <li>Doctor can accept reject an appointment.</li>
      <li>Admin can see all the appointment metrics for insights.</li>
    </ul>
  </div>
);

export default Hero;
