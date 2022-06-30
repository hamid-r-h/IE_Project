import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Profile from "./component/Profile";

import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import app from "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     
        <Route exact path='/home' element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
            
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
