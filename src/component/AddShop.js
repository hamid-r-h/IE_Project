import React, { useState } from "react";
import style from "./AddShop.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const authAxios = axios.create({
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
});

const AddShop = () => {

    const [name, setName] = useState();

    const nameInput = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
        authAxios.post("http://localhost:9000/api/user/shop", {
            name: name
        }).then().catch(err => console.log(err));
    }
    return (
        <>
          <div className={`${style.header}`}>ویرایش اطلاعات</div>
          <form>
            <div>
              <label>نام</label>
              <br />
              <input type="text" onChange={nameInput} value={name} />
            </div>
            <button className={style.submit} onClick={handleSubmit}>
              افزودن
            </button>
            <Link to="/profile/shops">
              <button className={style.back}>بازگشت</button>
            </Link>
          </form>
        </>);
}

export default AddShop;