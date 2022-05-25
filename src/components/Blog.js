import React from 'react';
import Title from "../images/title.png"
import Blog_1 from '../images/blog-1.jpg'
import Blog_2 from '../images/blog-2.jpg'
import Blog_3 from '../images/blog-3.jpg'

const Blog = () => {
    return (
        <div className="blog pt-5 pb-5">
            <div className="container">
                <div className="main-title text-center mt-5 mb-5 position-relative">
                    <img className="mb-4" src={Title} alt="Title" />
                    <h2>Read Our Blog</h2>
                    <p className='text-black-50 text-uppercase'>NEW STORIES</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Blog_1} className="card-img-top" alt="Blog" />
                            <div className="card-body">
                                <span className="text-black-5">Jan 17, 22</span>
                                <h5 className="card-title">Some Awesome Blog Title Here</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Blog_2} className="card-img-top" alt="Blog" />
                            <div className="card-body">
                                <span className="text-black-5">Jan 17, 22</span>
                                <h5 className="card-title">Some Awesome Blog Title Here</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src={Blog_3} className="card-img-top" alt="Blog" />
                            <div className="card-body">
                                <span className="text-black-5">Jan 17, 22</span>
                                <h5 className="card-title">Some Awesome Blog Title Here</h5>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center mt-5">
                        <a className="btn rounded-pill main-btn text-uppercase " href="#2">more storys</a>
                </div>
            </div>
        </div>
    )
}

export default Blog;
