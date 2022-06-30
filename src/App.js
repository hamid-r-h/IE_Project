import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";

import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import app from "./app.css";
import Favorites from "./component/Favorites";
import EditProfile from "./component/EditProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/favorites" element={<Favorites />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
