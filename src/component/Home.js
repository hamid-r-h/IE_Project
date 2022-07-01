import React from "react";
import { useState } from "react";
import torob from "../img/torob.jpg";
import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import SignModal from "./SignModal";
import Nav from "./Nav"
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      {<Nav/>}
      <div className={`${style.title}`}>
        <img src={torob} alt="torob" />
        <div className={`${style.title_first}`}>
          <h1> ترب </h1>
          <p>موتور جستجوی هوشمند خرید</p>
        </div>

        <div className={`${style.input_icon}`}>
          <input
            type="text"
            placeholder="نام کالا را وارد کنید "
            name="search"
          />
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </div>
      </div>
   
    </div>
  );
};
export default Home;
