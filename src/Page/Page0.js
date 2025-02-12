import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import './Page.css';
import { useState } from 'react';

import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Themes = {
    white: {
        main: "",
        accent: "",
        background: ""
    }
}




function Page0() {
    const [theme, SetTheme] = useState({
        background: "#ffffff",
        h1: "#8b8b8b",
        h2: "#9C9B9B",
        text: "#b1b1b1",
        accent: "#59c3dd",
        accentBackground: "#ffc170",
        underlineLight: "#b1b1b1",
        underlineHeavy: "#8b8b8b"
    })

    document.body.style.backgroundColor = theme.background;

    return (
        <div className="Page0">
            <div id='top'></div>
            <Header theme={theme}/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}


export default Page0;