import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

  const [text,settext] = useState('');

  const ConvertUp = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to uppercase","success")
  }
  const ClickClear = ()=>{
    settext("");
    props.showAlert("Text cleared","success")
  }

  const ConvertLow = ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to lowercase","success")
  }
  
  const ConvertOnchange = (event)=>{
    settext(event.target.value);
  }
  const ClickCopy = ()=> { 
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success")
  
  }
  const ClickRemoveSpace = ()=> { 
    settext(text.replace(/\s+/g, ' '));
    props.showAlert("Removed extra spaces","success")
  
  }
  return (
  
      <div className="mb-3 my-5">
          <h2 className="my-3">Enter the text to analyze below</h2>
          <textarea className="form-control" value = {text} onChange = {ConvertOnchange} style={{backgroundColor: props.mode==='dark'?'#072045':'white', color:props.mode==="light"?"black":"white"}} id="myBox" rows="10"></textarea>
          <button disabled = {text.length===0} className="btn btn-primary my-3 mx-1" onClick = {ConvertUp}>Convert to Uppercase</button>
          <button disabled = {text.length===0} className="btn btn-primary my-3 mx-1" onClick = {ConvertLow}>Convert to Lowercase</button>
          <button disabled = {text.length===0} className="btn btn-primary my-3 mx-1" onClick = {ClickCopy}>Click to Copy</button> 
          <button disabled = {text.length===0} className="btn btn-primary my-3 mx-1" onClick = {ClickRemoveSpace}>Click to Remove Extra Spaces</button> 
          <button disabled = {text.length===0} className="btn btn-primary my-3 mx-1" onClick = {ClickClear}>Click to Clear</button> 
          <h2 className="my-3">Your Text Summary</h2>
          <p className="my-3">{`Total number of word present ${text.split(' ').filter((element)=> element.length!==0).length} and total number of character present ${text.length}`}</p>
          <p className="my-3">{`${0.008 * text.split(' ').filter((element)=> element.length!==0).length} minitues read`}</p>
          <h2 className="my-3">Preview</h2>
          <p className="my-3">{text}</p>
      </div>
    
  )
}
