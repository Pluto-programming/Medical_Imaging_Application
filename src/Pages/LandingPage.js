import React from "react";

import '../PagesStyles/LandingPage.style.css';

function LandingPage() {
  return (
    <div className="LandingPage">

        {/* section one */}
        <div className="LandingPage-section">
            <div className="LandingPage-image">
                <p>IMAGE GOES HERE</p>
            </div>
            <div className="LandingPage-text">
                <p>
                    TEXT GOES HERE
                </p>
            </div>
        </div>

        {/* section two */}
        <div className="LandingPage-section">
            <div className="LandingPage-image">
                <p>IMAGE GOES HERE</p>
            </div>
            <div className="LandingPage-text">
                <p>
                    TEXT GOES HERE
                </p>
            </div>
        </div>

        {/* section three*/}
        <div className="LandingPage-section">
            <div className="LandingPage-image">
                <p>IMAGE GOES HERE</p>
            </div>
            <div className="LandingPage-text">
                <p>
                    TEXT GOES HERE
                </p>
            </div>
        </div>

        {/* section four */}
        <div className="LandingPage-section">
         <div className="LandingPage-image">
                <p>IMAGE GOES HERE</p>
            </div>
            <div className="LandingPage-text">
                <p>
                    TEXT GOES HERE
                </p>
            </div>
        </div>

    </div>
  );
}

export default LandingPage;