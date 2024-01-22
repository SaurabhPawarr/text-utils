import React, { useState } from "react"

export default function TextUtils(props) {

    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const ConvertToUpperCase = ()=>{
        let UpText = text.toUpperCase();
        setText(UpText);
        GetWordCount();
        props.showAlert("Text converted to uppercase!","Success");
    }

    const GetWordCount = () => {
        let arr = [];
        text.split(" ").forEach(element=>{
            if(element.length!==0){
                arr.push(element);
            }
        })
        setWordCount(arr.length);
    }

    const ConvertToLowerCase = ()=>{
        let UpText = text.toLowerCase();
        setText(UpText);
        GetWordCount();
        props.showAlert("Text converted to lowercase!","Success");
    }

    const ClearSpace = ()=>{
        setText('');
        setWordCount(0);
        props.showAlert("Text space cleared!","Info");
    }

    const CopyText = ()=>{
        let textBox = document.getElementById("myBox");
        let textvalue = textBox.value;
        navigator.clipboard.writeText(textvalue);
        props.showAlert("Text copied to clipboard!","Info");
    }

    const RemoveExtraSpaces =()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        GetWordCount();
        props.showAlert("Extra spaces removed from text!","Info");
    }

    const HandleOnChange = (event)=>{
        setText(event.target.value);
        GetWordCount();
    }

    return (
        <div className="container my-3">
            <div className="mb-3">
                <h2 htmlFor="myBox" className="form-label" style={{color:props.mode==="dark"?"white":"black"}}>{props.lable}</h2>
                <textarea className="form-control" value={text} style={{backgroundColor:"#c1ced1"}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-dark my-2 mx-1" style={{backgroundColor:props.mode==="dark"?"#204e58":"black"}} id="uppercase" onClick={ConvertToUpperCase}>Uppercase</button>
                <button className="btn btn-dark my-2 mx-1" style={{backgroundColor:props.mode==="dark"?"#204e58":"black"}} id="lowercase" onClick={ConvertToLowerCase}>Lowercase</button>
                <button className="btn btn-dark my-2 mx-1" style={{backgroundColor:props.mode==="dark"?"#204e58":"black"}} id="extra-space" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-dark my-2 mx-1" style={{backgroundColor:props.mode==="dark"?"#204e58":"black"}} id="copy-text" onClick={CopyText}>Copy Text</button>
                <button className="btn btn-dark my-2 mx-1" style={{backgroundColor:props.mode==="dark"?"#204e58":"black"}} id="clear" onClick={ClearSpace}>Clear</button>
            </div>
            <div className="container">
                <h2 style={{color:props.mode==="dark"?"white":"black"}}>Your Text Summary</h2>

                <p style={{color:props.mode==="dark"?"white":"black"}}>Word Count: {wordCount}, & Text Lenght: {text.length}</p>

                <h2 style={{color:props.mode==="dark"?"white":"black"}}>Text Preview</h2>
                <p style={{color:props.mode==="dark"?"white":"black"}}>{text}</p>
            </div>
        </div>
    )
}
