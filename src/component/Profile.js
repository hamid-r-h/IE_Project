import React from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";


const Profile = () => {
  return (
    <>
      <div className={`${style.header}`}>نمایه ها</div>
      <ul>
        <li>
          <Link to={`/profile/favorites`}><div>محبوب ها</div></Link>
        </li>
        <li>
          <Link to={`/profile/shops`}><div>لیست فروشگاه ها</div></Link>
        </li>
      </ul>
    </>
  );
};

export default Profile;
