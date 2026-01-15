import { useState } from "react";
import "./EmailForm.css";

function EmailForm() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = () => {

    }

    return (
        <div className="EmailForm">
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <form className="EmailForm-Wrapper">
                <label form="Email" className="Label-Email">Email</label>
                <input type="text" name="Email" className="Input-Email" onChange={(e) => {setEmail(e.target.value)}}></input>
                <label form="Subject" className="Label-Subject">Subject</label>
                <input type="text" name="Subject" className="Input-Subject" onChange={(e) => {setSubject(e.target.value)}}></input>
                <label form="Message" className="Label-Message">Message</label>
                <textarea type="text" className="Input-Message" onChange={(e) => {setMessage(e.target.value)}}></textarea>
            </form>
            <button className="EmailForm-Button">
                <p onClick={handleSubmit}>Send</p>
            </button>
        </div>
    )
}

export default EmailForm;