import "./Contact.css";
import pfp from "../assets/media/pfp.png";
import mail from "../assets/media/icons/mail.png";

function Contact() {
    return (
        <div className="Contact">
            <h2 id="Contact-Title">Contact</h2>
            <div className="Contact-BorderDiv" />
            <div className="Contact-MessageGroup">
                <img className="Contact-MessageGroup-pfp" src={pfp} />
                <div className="Contact-MessageGroup-Message">
                    <p className="Contact-MessageGroup-text">Send me a message!</p>
                    <a className="Contact-MessageGroup-email" href="mailto:mingfengz1678@gmail.com">
                        <img src={mail} />
                        <p>mingfengz1678@gmail.com</p>
                    </a>
                </div>
                
            </div>
            <div className="Contact-Form">
                <div className="Contact-Form-Display">
                    <div className="">

                    </div>
                    <div>

                    </div>
                </div>
                <img></img>
            </div>
        </div>
    )
}

export default Contact;