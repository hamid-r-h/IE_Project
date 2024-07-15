import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./EditProfile.module.css";

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const EditProfile = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const usernameInput = (e) => {
    setUsername(e.target.value);
  };

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const phoneInput = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = () => {
    authAxios
      .put("http://localhost:9000/api/user", {
        username: username,
        email: email,
        phone: phone,
      })
      .then()
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    authAxios
      .get("http://localhost:9000/api/user")
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={`${style.header}`}>ویرایش اطلاعات</div>
      <form>
        <div>
          <label>نام کاربری</label>
          <br />
          <input type="text" onChange={usernameInput} value={username} />
        </div>
        <div>
          <label>ایمیل</label>
          <br />
          <input type="text" onChange={emailInput} value={email} />
        </div>
        <div>
          <label>شماره موبایل</label>
          <br />
          <input type="text" onChange={phoneInput} value={phone} />
        </div>
        <button className={style.submit} onClick={handleSubmit}>
          اعمال تغییرات
        </button>
        <Link to="/profile">
          <button className={style.back}>بازگشت</button>
        </Link>
      </form>
    </>
  );
};

export default EditProfile;
