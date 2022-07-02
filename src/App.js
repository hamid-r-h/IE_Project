import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";

import { BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import app from "./app.css";
import Favorites from "./component/Favorites";
import EditProfile from "./component/EditProfile";
import ResSearch from "./component/ResSearch";
import UserShopsList from "./component/UserShopsList";
import AddProduct from "./component/AddProduct";
import ShopOptions from "./component/ShopOptions";
import AddShop from "./component/AddShop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/favorites" element={<Favorites />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/products/:category/:subCategory" element={<ResSearch />} />
          <Route path="/products/:category" element={<ResSearch />} />
          <Route path="/profile/shops" element={<UserShopsList />} />
          <Route path="/profile/shops/shop/addproduct/:id" element={<AddProduct />} />
          <Route path="/profile/shops/shop/:id/:name" element={<ShopOptions />} />
          <Route path="/profile/shops/addshop" element={<AddShop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
