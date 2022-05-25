import React from 'react';
import Title from "../images/title.png";
import Laptop from "../images/laptop.png";

const Stuff = () => {
    return (
        <div className="staff pt-5">
            <div className="container">
                <div className="main-title text-center mt-5 mb-5 position-relative">
                    <img className="mb-4" src={Title} alt="Title" />
                    <h2>Some Stuff About Us</h2>
                    <p className='text-black-50 text-uppercase'>THE GREAT TEAM</p>
                </div>
                <p className="discription text-center mb-5 text-black-50 m-auto">
                    Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                </p>
                <div className="row align-items-center">
                    <div className="col-lg-4 mb-4 text-center text-md-start">
                        <div className="text">
                            <h4>Retina Design</h4>
                            <p className='text-black-50 fs-6'>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit,
                                eget tincidunt nibh pulvinar a.
                            </p>
                            <p className='text-black-50 fs-6'>
                                Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. 
                                Donec sollicitudin molestie malesuada.
                            </p>
                            <a className="btn rounded-pill main-btn text-uppercase " href="#2">order me one</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <img className='img-fluid' src={Laptop} alt="laptop" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stuff;