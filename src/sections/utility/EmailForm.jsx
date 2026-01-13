import "./EmailForm.css";

function EmailForm() {
    return (
        <div className="EmailForm">
            <form className="EmailForm-Wrapper">
                <label form="Email" className="Label-Email">Email</label>
                <input type="text" name="Email" className="Input-Email"></input>
                <label form="Subject" className="Label-Subject">Subject</label>
                <input type="text" name="Subject" className="Input-Subject"></input>
                <label form="Message" className="Label-Message">Message</label>
                <input type="text" className="Input-Message"></input>
            </form>
            <button></button>
        </div>
    )
}

export default EmailForm;