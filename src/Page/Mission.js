function Mission(props) {
    return (
        <div style={{padding: "5px"}}>
            <div style={{display: "block", borderBottom: "2px solid " + props.theme.underlineLight, marginBottom: "3px"}}></div>
            <h1 className="Heading" style={{color: props.theme.h2}}>Aims to Move Hearts</h1>
            <div style={{display: "block", borderBottom: "3px solid " + props.theme.underlineHeavy}}></div>
        </div>
    );
}

export default Mission;