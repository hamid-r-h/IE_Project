import React, { useEffect, useState } from "react";
import style from "./Favorites.module.css";
import torob from "../img/torob.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const Favorites = () => {
  const [favs, setFavs] = useState();

  const removeFav = (id) => {
    authAxios
      .delete(`http://localhost:9000/api/user/favorites/${id}`)
      .then()
      .catch((err) => console.log(err));
      setFavs(favs.filter(a => a._id !== id));
  };

  useEffect(() => {
    authAxios
      .get("http://localhost:9000/api/user/favorites")
      .then((res) => {
        setFavs(res.data.favorites);
        console.log(res.date.favorites);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={`${style.header}`}>محبوب ها</div>
      {favs === undefined
        ? ""
        : favs.map((item) => (
            <div className={`${style.card_container}`} key={item._id}>
              <div className={style.card}>
                <img src={item.image} />
                {/* <Link to={`/products`}> */}
                <h3>{item.name}</h3>
                {/* </Link> */}
                <p>{}</p>
                <button onClick={() => removeFav(item._id)}>
                  حذف از محبوب ها
                </button>
              </div>
            </div>
          ))}
    </>
  );
};

export default Favorites;
