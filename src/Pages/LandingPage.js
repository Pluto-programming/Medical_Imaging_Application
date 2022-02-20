import React from "react";

import '../PagesStyles/LandingPage.style.css';

function LandingPage() {
  return (
    <div className="LandingPage">


        {/* section one */}
        <header className="LandingPage-s1" > 
            <div>
            
            <div className="head">
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sequi ratione architecto necessitatibus
              cum praesentium dolor totam voluptatibus recusandae."</p>
            </div>
            </div>
        </header>

        {/* section two */}
        <div className="LandingPage-section2">
            <div className="container">
            <h1>COVID-19 Medical Imaging </h1>
                <button class ="btn">Explore </button>   
                    
            </div>
            
        </div>

        {/* section three*/}
    

         <div className="LandingPage-section3 LandingPage-text" >
            <div className="LandingPage-image">
                <p> View patient profiles 
                    <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/checkbox_icon_151467.png" 
                    alt="checkbox" width="75" height="75"/> 
                </p>

            </div>


            <div className="LandingPage-text LandingPage-image">
                <p>
                 Add, Edit, Upload exams 
                    <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/checkbox_icon_151467.png" 
                    alt="checkbox" width="75" height="75"/> 
                </p>
            </div>
            <div className="LandingPage-image LandingPage-text">
                <p> Filter and organize 

                <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/checkbox_icon_151467.png" 
                    alt="checkbox" width="75" height="75"/> 

                </p>
            </div>


            {/* section four */}
        <div className="LandingPage-section">
         <div className="LandingPage-image">
                <p>
                    
                </p>
            </div>
            <div className="LandingPage-text">
                <p>
                
                </p>
            </div>
        </div>
        </div>

        
    </div>
  );
}

export default LandingPage;