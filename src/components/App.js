import react from "react";
import Navbar from "./Navbar"
import Landing from "./Landing";
import Features from "./Features";
import Our_Work from "./Our_Work";
import Stuff from "./Stuff"
import Our_Team from "./Our_Team";
import Techs from "./Techs";
import Project from "./Project";
import Blog from "./Blog";
import Sup from "./Sup";
import Footer from "./Footer";

const App = () => {
    return (
        <>
        <Navbar/>
        <Landing/>
        <Features/>
        <Our_Work/>
        <Stuff/>
        <Our_Team/>
        <Techs/>
        <Project/>
        <Blog/>
        <Sup/>
        <Footer/>
        </>
    );
};

export default App