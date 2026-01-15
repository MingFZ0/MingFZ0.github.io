import NavControl from "./utility/NavControl";
import "./Header.css";

function Header() {
    return(
        <>
            <div className="Header" id="Header">
                <NavControl text="About" link="#Header"/>
                <NavControl text="Technology" link="#Technology"/>
                <h2 color="light" id="Header-Title">Mingfeng Zhong</h2>
                <NavControl text="Details" link="#Details"/>
                <NavControl text="Courses" link="#Courses"/>
            </div>
            <h3 id="Header-Descriptor">Aim to Move Hearts</h3>
        </>
    )

}
export default Header;