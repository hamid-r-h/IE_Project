import React from "react";
import { useParams } from "react-router-dom";
import style from "./ShopOptions.module.css";
import { Link } from "react-router-dom";

const ShopOptions = () => {
    const {id, name} = useParams();
    return (
        <>
          <div className={`${style.header}`}>{name}</div>
          <ul className={style.ul}>
            <li>
              <Link to={`/profile/shops/shop/addproduct/${id}`}>
                <div>افزودن محصول جدید</div>
              </Link>
            </li>
            <li>
              <Link to={`/profile/shops/shop/reports/${id}`}>
                <div>لیست گزارش ها</div>
              </Link>
            </li>
          </ul>
        </>
      );
}

export default ShopOptions;