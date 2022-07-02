import React from "react";
import { Link } from "react-router-dom";
import style from "./Profile.module.css";


const Profile = () => {
  return (
    <>
        <div className="ui grid container">
      <div className={`${style.header}`}>نمایه ها</div>
      <ul className={style.ul}>
      <li>
          <Link to={`/profile/edit`}><div>ویرایش اطلاعات</div></Link>
        </li>
        <li>
          <Link to={`/profile/favorites`}><div>محبوب ها</div></Link>
        </li>
        <li>
          <Link to={`/profile/shops`}><div>لیست فروشگاه ها</div></Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Profile;
