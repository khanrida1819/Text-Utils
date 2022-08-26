
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode=== 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled.", "success");
      document.title='Textutils-Light mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled.", "success");
      document.title='Textutils-Dark mode';
    }
  }
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TexUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={<Textform heading="Enter the text to anlyze below" mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
