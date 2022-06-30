import React from "react";
import style from "./EditProfile.module.css";

const EditProfile = () => {
  return (
    <>
      <div className={`${style.header}`}>ویرایش اطلاعات</div>
      <form>
        <div>
          <label>نام کاربری</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label>ایمیل</label>
          <br />
          <input type="text" />
        </div>
        <div>
          <label>شماره موبایل</label>
          <br />
          <input type="text" />
        </div>
        <button>اعمال تغییرات</button>
      </form>
    </>
  );
};

export default EditProfile;
