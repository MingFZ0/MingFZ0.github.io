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
                <textarea type="text" className="Input-Message"></textarea>
            </form>
            <button className="EmailForm-Button">
                <p>Send</p>
            </button>
        </div>
    )
}

export default EmailForm;