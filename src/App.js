import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import app from "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
     
        <Route  path='/home' element={<Home/>}>
                        
          </Route>
        
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
