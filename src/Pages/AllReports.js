import { render } from "@testing-library/react";

import images from '../IMAGES';


import '../PagesStyles/AllReports.style.css';


function AllReports() {
  
  render();{
    return (
      <div className="AllReports-wrapper">
          <div className="AllReports-row">
            
            <div className="AllReports-column">
              <p className="AllReports-p">{}</p>
              {images && images.map(i => {
                <div key={i.name} className="AllReports-row"/>
                return <img key={i.name} className="AllReports-col" src={i.src} className="AllReports-img" alt="Patients lungs"/> })}
              </div>
          </div>
        <div className="AllReports-sorting">
          <p>Filter</p>
        </div>
    
      </div>
    
    
    );
    }
  
  }
  export default AllReports;