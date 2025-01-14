import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import './Page.css';
import { useState } from 'react';
import Header from './Header';
import About from './About';

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
            <Header/>
            <About/>
            <h1 className='Title' style={{color: theme.h1}}>Mingfeng Zhong</h1>
            <p className='TextDescription' id='SelfSummary' style={{color: theme.text}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
    );
}


export default Page0;