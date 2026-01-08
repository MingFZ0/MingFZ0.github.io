import NavControl from "./utility/NavControl";
import "./Header.css";

function Header() {
    return(
        <>
            <div className="Header">
                <NavControl text="About" link="#Top"/>
                <NavControl text="Technology" link="#Technology"/>
                <h2 color="light" id="Header-Title">Mingfeng Zhong</h2>
                <NavControl text="Details" link="#Details"/>
                <NavControl text="Contact" link="#Contact"/>
            </div>
            <h3 id="Header-Descriptor">Aim to Move Hearts</h3>
        </>
    )

}
export default Header;