import React, {useState} from 'react'


export default function TextForm(props){
    const [text, setText] = useState("");
    const handleUpChange =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is coverted to Upper Case", "success");
    }
    const handleLoChange =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is coverted to Lower Case", "success");
    }
    const handleChange =(event)=>{
        setText(event.target.value);
    }
    const handleCapitalChange =()=>{
        const arr = text.split(" ");
        for(let i=0; i<arr.length; i++)
        {
            arr[i] = arr[i].charAt(0).toUpperCase() +  arr[i].slice(1);
        }
        let newText =  arr.join(" ");
        setText(newText);
        props.showAlert("Text is coverted to Capitalized Case", "success");
    }
    const handleSentenceChange =()=>{
        const arr = text.split(". ");
        for(let i=0; i<arr.length; i++)
        {
            arr[i] = arr[i].charAt(0).toUpperCase() +  arr[i].slice(1);
        }
        let newText =  arr.join(". ");
        setText(newText);
        props.showAlert("Text is coverted to Sentence Case", "success");
    }

    const copyContent =()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard", "success");
    }
return(
    <div className='container'>
    <div className="container my-3"  style={{color : props.mode === "light"?"black":"white"}}>
        <h4>{props.heading}</h4>
        <textarea className="form-control" style={{backgroundColor : props.mode === "light"?"white":"black", color :  props.mode === "light"?"black":"white"}} value={text} onChange={handleChange} name="textArea" id="textArea"  rows="8"></textarea>
    </div>
    <div className="my-4 container">
    <button disabled={text.length === 0} type="button" onClick={handleUpChange} className="btn btn-primary mx-2 my-2 ">UpperCase</button>
    <button disabled={text.length === 0} type="button" onClick={handleLoChange} className="btn btn-primary mx-2 my-2">LowerCase</button>
    <button disabled={text.length === 0} type="button" onClick={handleCapitalChange} className="btn btn-primary mx-2 my-2">CapitalizedCase</button>
    <button disabled={text.length === 0} type="button" onClick={handleSentenceChange} className="btn btn-primary mx-2 my-2">SentenceCase</button>
    <button disabled={text.length === 0} type="button" onClick={copyContent} className="btn btn-primary mx-2 my-2">ClipboardCopy</button>
    </div>

    <div className="container "  style={{color : props.mode === "light"?"black":"white"}}>
        <h6>Your Text Summary:</h6>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>Takes {0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes to read</p>
        <h5>Preview: </h5>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </div>
  )
}
