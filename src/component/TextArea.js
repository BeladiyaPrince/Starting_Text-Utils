import React, {useState} from "react"; 

export default function TextArea(props) {
    const [text, setText] = useState('');

    const changeevent = (event) => {
        setText(event.target.value);
    }

    const clickevent = () => {
        let t1 = text.toUpperCase();
        setText(t1);
        props.showMessage("Your Text is converted into upperCase","success");
    }

    const clickLoEvent = () => {
        let t1 = text.toLowerCase();
        setText(t1);
        props.showMessage("Your Text is converted into lowerCase","success");
    }

    const clickcoEvent = () => {
        var splitString = text.split("");
        var reverseArray = splitString.reverse();
        var t1 = reverseArray.join("");
        setText(t1);
        props.showMessage("Your Text is reversed","success");
    }

    const clickcopyEvent = () => {
        let tex = document.getElementById("exampleFormControlTextarea1");
        tex.select();
        navigator.clipboard.writeText(tex.value);
        props.showMessage("Your Text is copy to clipboard","success");
    }
    
    const clickrsEvent = () => {
        let newtex = text.split(/[ ]+/);
        setText(newtex.join(" "));
        props.showMessage("Remove extra spaces from text","success");
    }

    const clickclrEvent = () => {
        let t1 = '';
        setText(t1);
        props.showMessage("Your Text is cleared","success");
    }

    const Color = () => {
        let btnbg;
        props.darkmode === 'black' ? 
            btnbg = 'white' :
            props.darkmode === 'green' ? 
                btnbg = 'black' :
                props.darkmode === 'purple' ? 
                     btnbg = 'green' :
                     props.darkmode === 'red' ? 
                         btnbg = 'yellow' :
                         props.darkmode === 'orange' ? 
                            btnbg = 'black' : btnbg = 'blue';

                            return btnbg;
    }

    const btnColor = () => {
        let btnbg;
        props.darkmode === 'black' ? 
            btnbg = 'black' :
            props.darkmode === 'green' ? 
                btnbg = 'green' :
                props.darkmode === 'purple' ? 
                     btnbg = 'yellow' :
                     props.darkmode === 'red' ? 
                         btnbg = 'red' :
                         props.darkmode === 'orange' ? 
                            btnbg = 'orange' : btnbg = 'white';

                            return btnbg;
    }

    return (
        <>
        <div style={{color : props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>               
            
            <div className="mb-3">
                <textarea style={{backgroundColor : props.mode==='light'?'white':props.darkmode == null ? 'grey':Color(), color : props.mode==='light'?props.darkmode:btnColor()}} className="form-control" value = {text} onChange={changeevent} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            
            <button type="button" onClick={clickevent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Convert To UpperCase</button>
            <button type="button" onClick={clickLoEvent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Convert To LowerCase</button>
            <button type="button" onClick={clickcoEvent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Convert To ReverseOrder</button>
            <button type="button" onClick={clickcopyEvent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Copy Text</button>
            <button type="button" onClick={clickrsEvent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Remove Spaces</button>
            <button type="button" onClick={clickclrEvent} style={{backgroundColor:Color(), color:btnColor(), border:`1px solid ${btnColor()}`}} className="btn btn-primary mx-1">Clear Text</button>
        </div>

        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p>{text.length>0?text.endsWith(' ')?text.split(" ").length-1:text.split(" ").length:"0"} Words and {text.length} Characters</p>
            <p>{text.length>0?text.endsWith(' ')?(text.split(" ").length-1)*0.008:text.split(" ").length*0.008:"0"} Minutes To Read</p>
            <h2>Preview Of Text</h2>
            <p>{text.length>0?text:"Enter text to text area for see the preview of text"}</p>
        </div>
        </>
    )
}