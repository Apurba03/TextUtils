import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const ConvertMode = ()=>{

      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#072045";
        document.body.style.color = "white";
        
        showAlert("Dark mode has been enabled", "success")
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light mode has been enabled", "success")

      }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode = {mode} ConvertMode={ConvertMode}/>
    <div style={{height : "50px"}}>
      <Alert alert={alert} />
    </div>
    <div className="container my-3">
    <Routes>
          <Route path="/about"
          element = {<About mode={mode}/>}/>
          <Route path="/" element = {<TextForm showAlert = {showAlert} mode={mode}/>}/>
        </Routes>
    </div>
    </Router>    
    </>
  );
}

export default App;
