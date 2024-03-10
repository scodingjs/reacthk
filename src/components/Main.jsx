import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Testimonials from "../pages/Testimonials";


const Main = () => {
    return(
        <main>
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Main;
