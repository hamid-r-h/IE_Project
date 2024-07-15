import React from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";

const Profile = () => {
  const logout = () => {
    sessionStorage.removeItem("token");
    console.log('hi');
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      <div className={`${style.header}`}>نمایه ها</div>
      <ul className={style.ul}>
        <li>
          <Link to={`/profile/edit`}>
            <div>ویرایش اطلاعات</div>
          </Link>
        </li>
        <li>
          <Link to={`/profile/favorites`}>
            <div>محبوب ها</div>
          </Link>
        </li>
        <li>
          <Link to={`/profile/shops`}>
            <div>لیست فروشگاه ها</div>
          </Link>
        </li>
        <li onClick={logout}>
          <div>خروج از حساب</div>
        </li>
      </ul>
    </>
  );
};

export default Profile;
