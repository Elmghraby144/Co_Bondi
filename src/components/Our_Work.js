import React from 'react';
import Title from "../images/title.png";
import Work_1 from "../images/work-01.jpg";
import Work_2 from "../images/work-02.jpg";
import Work_3 from "../images/work-03.jpg";
import Work_4 from "../images/work-04.jpg";
import Work_5 from "../images/work-05.jpg";
import Work_6 from "../images/work-06.jpg";
import Work_7 from "../images/work-07.jpg";
import Work_8 from "../images/work-08.jpg";

const Our_Work = () => {
    return (
        <div className='our-work text-center pt-5 pb-5'>
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative">
                    <img className="mb-4" src={Title} alt="Title" />
                    <h2>We Make This</h2>
                    <p className='text-black-50 text-uppercase'>PREPARE TO BE AMAZED</p>
                </div>
                <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
                    <li className='active rounded-pill'>All</li>
                    <li>Design</li>
                    <li>Code</li>
                    <li>Photo</li>
                    <li>App</li>
                </ul>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_1} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_2} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_3} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_4} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_5} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_6} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_7} alt="Work" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="box mb-3 bg-white" data-work="Application">
                            <img className="img-fluid" src={Work_8} alt="Work" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a className="btn rounded-pill main-btn text-uppercase " href="#2">i want more</a>
                </div>
            </div>
        </div>
    )
}

export default Our_Work;