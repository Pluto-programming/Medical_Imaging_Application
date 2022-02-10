import React from "react";

import '../PagesStyles/AllReports.style.css';

function AllReports() {

  const images =[
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591061.jpg&fm=jpg",
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591061.jpg&fm=jpg",
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591061.jpg&fm=jpg",
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591061.jpg&fm=jpg",
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-1591061.jpg&fm=jpg"
  ]
  const patients = [
    "Amanda Lastname",
    "Jenniffer Lastname",
    "Betty Lastname",
    "Karl Lastname",
    "Matthew Lastname"
  ]

  return (
    <div className="AllReports-wrapper">
        <div className="AllReports-row">
          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[0]} </p>
            <img className="AllReports-img" src={ images[0] } alt="Patient's lungs"/>
          </div>

          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[1]} </p>
            <img className="AllReports-img" src={ images[1] } alt="Patient's lungs"/>
          </div>

          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[2]} </p>
            <img className="AllReports-img" src={ images[2] } alt="Patient's lungs"/>
          </div>

          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[3]} </p>
            <img className="AllReports-img" src={ images[3] } alt="Patient's lungs"/>
          </div>

          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[4]} </p>
            <img className="AllReports-img" src={ images[4] } alt="Patient's lungs"/>
          </div>

          <div className="AllReports-column">
            <p className="AllReports-p"> {patients[0]} </p>
            <img className="AllReports-img" src={ images[0] } alt="Patient's lungs"/>
          </div>
          
        </div>
      <div className="AllReports-sorting">
        <p>SORTING TOOL GOES HERE</p>
      </div>
    </div>
  );
}

export default AllReports;