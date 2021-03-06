import React from 'react';
import Title from "../images/title.png";

const Features = () => {
    return (
        <div className="featuers pt-5 pb-5 text-center">
            <div className="container">
                <div className="main-title mt-5 mb-5 position-relative">
                    <img className="mb-4" src={Title} alt="Title" />
                    <h2>We are Good at</h2>
                    <p className='text-black-50 text-uppercase'>some of these stuff under</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="feat">
                            <div className="icon-holder position-relative">
                                <i className="fa-solid fa-1 position-absolute bottom-0 number"></i>
                                <i className="fa-solid fa-pencil fa-4x position-absolute bottom-0 icon"></i>
                            </div>
                            <h4 className='mb-3 mt-3 text-uppercase'>graphic design</h4>
                            <p className='text-black-50 lh-lg'>
                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
                            convallis at tellus.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feat">
                            <div className="icon-holder position-relative">
                                <i className="fa-solid fa-2 position-absolute bottom-0 number"></i>
                                <i className="fa-solid fa-tv fa-4x position-absolute bottom-0 icon"></i>
                            </div>
                            <h4 className='mb-3 mt-3 text-uppercase'>graphic design</h4>
                            <p className='text-black-50 lh-lg'>
                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
                            convallis at tellus.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feat">
                            <div className="icon-holder position-relative">
                                <i className="fa-solid fa-3 position-absolute bottom-0 number"></i>
                                <i className="fa-solid fa-plug fa-4x position-absolute bottom-0 icon"></i>
                            </div>
                            <h4 className='mb-3 mt-3 text-uppercase'>graphic design</h4>
                            <p className='text-black-50 lh-lg'>
                            Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
                            convallis at tellus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;