import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import './Page.css';


import Overview from './Overview';
import Mission from './Mission';
import Projects from './Projects';
import Contact from './Contact';




function Page0() {
    return (
        <div className="Page0">
            <h1 className='Title'>Mingfeng Zhong</h1>
            <Mission/>
            <p className='TextDescription' id='SelfSummary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
            </p>
            <Overview/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Page0;