import React from "react";
import style from "./Favorites.module.css";
import torob from "../img/torob.jpg";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <>
      <div className={`${style.header}`}>محبوب ها</div>
      <div className={`${style.card_container}`}>
        <div className={style.card}>
            <img src={torob} />
            <Link to={`/products`}><h3>S20 fe</h3></Link>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،</p>
            <button>حذف از محبوب ها</button>
        </div>
        <div className={style.card}>card 2</div>
        <div className={style.card}>card 3</div>
        <div className={style.card}>card 4</div>
        <div className={style.card}>card 5</div>
      </div>
    </>
  );
};

export default Favorites;
