import React from "react";
import techs_1 from "../images/tech-1.png";
import techs_2 from "../images/tech-2.png";
import techs_3 from "../images/tech-3.png";
import techs_4 from "../images/tech-4.png";
import techs_5 from "../images/tech-5.png";
import techs_6 from "../images/tech-6.png";


const Techs = () => {
    return (
        <div className="techs pt-5 pd-5 text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_1} alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_2} alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_3} alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_4} alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_5} alt="Logo" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
                        <img className="img-fluid" src={techs_6} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Techs;