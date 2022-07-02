import style from "./UserShopsList.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const UserShopsList = () => {
  const [shops, setShops] = useState();

  useEffect(() => {
    authAxios
      .get("http://localhost:9000/api/user/shops")
      .then((res) => setShops(res.data.shops))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={`${style.header}`}>لیست فروشگاه ها</div>
      <ul className={style.ul}>
        {shops === undefined
          ? ""
          : shops.map((item) => (
              <li key={item._id}>
                <Link to={`/profile/shops/${item._id}`}>
                  <div>{item.name}</div>
                </Link>
              </li>
            ))}
      </ul>
    </>
  );
};

export default UserShopsList;
