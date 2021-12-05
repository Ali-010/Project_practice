import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnClick= ()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase();
settext(newText);
    }
    const handleLowClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        settext(newText);
            }
    const [text, settext] = useState('')
    const handleOnchange=(event)=>{
        // console.log("On change");
        settext(event.target.value)
    }
    return (
        <>
                 
<div className= "container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="TextBox" rows="8"></textarea>
  
</div>
<button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>

</div>
<div className="container">
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split("").length} Minutes Read</p>
<h2>Preview</h2>
<p>{text}</p>

</div>
        
        </>
    )
}
