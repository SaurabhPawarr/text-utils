import React, { useState } from 'react';
import './App.css';
//import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import TextUtils from './Components/TextUtils';
import Alert from './Components/Alert';


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=> {
      if(mode==="dark"){
        setMode("light");
        document.body.style.backgroundColor="white";
        document.title="Text Utils - Light Mode";
      }
      else{
        setMode("dark");
        document.body.style.backgroundColor="rgb(13,23,33)";
        document.title="Text Utils - Dark Mode";
      }
  }

  const showAlert = (msg,type)=> {
      setAlert({
        message:msg,
        type:type
      })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  return (
    <>
    <Navbar title="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <AboutUs mode={mode} toggleMode={toggleMode}/>*/}
    <TextUtils lable="Please enter the input text" mode={mode} showAlert={showAlert}/> 
    
    </>
  );
}

export default App;