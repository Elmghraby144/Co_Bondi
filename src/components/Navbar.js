import react from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#Home">
                        <img src={logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="main">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3 active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#Services">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#Portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link p-2 p-lg-3" href="#Content">Content</a>
                            </li>
                        </ul>
                        <div className="search ps-3 pe-3 d-lg-block">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <a className="btn rounded-pill main-btn" href="#a">Login</a>
                    </div>
                </div>
            </nav>
    );
};
export default Navbar