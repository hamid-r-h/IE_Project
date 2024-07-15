import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./AddProduct.module.css";

const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

const AddProduct = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [link, setLink] = useState();

  const { id } = useParams();

  const nameInput = (e) => {
    setName(e.target.value);
  };

  const categoryInput = (e) => {
    setCategory(e.target.value);
  };

  const subcategoryInput = (e) => {
    setSubcategory(e.target.value);
  };

  const descriptionInput = (e) => {
    setDescription(e.target.value);
  };

  const imageInput = (e) => {
    setImage(e.target.value);
  };

  const priceInput = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const linkInput = (e) => {
    setLink(e.target.value);
  };

  const add = () => {
    authAxios
      .post(`http://localhost:9000/api/user/${id}/product`,{
          name: name,
          category: category,
          subCategory: subcategory,
          description: description,
          image: image,
          price: price,
          link: link
      })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={`${style.header}`}>ویرایش اطلاعات</div>
      <form>
        <div>
          <label>نام</label>
          <br />
          <input type="text" onChange={nameInput} />
        </div>
        <div>
          <label>دسته</label>
          <br />
          <input type="text" onChange={categoryInput} />
        </div>
        <div>
          <label>زیردسته</label>
          <br />
          <input type="text" onChange={subcategoryInput} />
        </div>
        <div>
          <label>توضیحات</label>
          <br />
          <input type="text" onChange={descriptionInput} />
        </div>
        <div>
          <label>لینک تصویر</label>
          <br />
          <input type="text" onChange={imageInput} />
        </div>
        <div>
          <label>قیمت</label>
          <br />
          <input type="number" onChange={priceInput} />
        </div>
        <div>
          <label>لینک خرید</label>
          <br />
          <input type="text" onChange={linkInput} />
        </div>
        <button className={style.submit} onClick={add}>
          افزودن
        </button>
        <Link to="/profile/shops">
          <button className={style.back}>بازگشت</button>
        </Link>
      </form>
    </>
  );
};

export default AddProduct;
