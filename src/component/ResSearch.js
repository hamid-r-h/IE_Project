import Nav from "./Nav"
import React from "react";

import { Link } from "react-router-dom";
import { useParams} from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";


const authAxios = axios.create({
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});


const ResSearch = () => {




    const title=useParams();
  
    const mobile_item = [{ name:":گوشی موبایل",category:"mobile",subCategory:""}
    ,{name:"گوشی سامسونگ",category:"mobile",subCategory:"samsung"}
    ,{name:"گوشی اپل",category:"mobile",subCategory:"apple"},
      {name:"گوشی شیائومی",category:"mobile",subCategory:"xiaomi"},
      {name:":تبلت" ,category:"tablet",subCategory:""},
      {name:" تبلت سامسونگ",category:"tablet",subCategory:"samsung"},
      {name:" تبلت شیائومی",category:"tablet",subCategory:"xiaomi"},
      {name:" تبلت اپل",category:"tablet",subCategory:"apple"}
    ]
    const laptop_item=
    [{ name:":لپتاپ",category:"laptop",subCategory:""}
    ,{name:"لپ تاپ لنوو",category:"laptop",subCategory:"lenovo"}
    ,{name:"لپتاپ ایسوس",category:"laptop",subCategory:"asus"},
      {name:"لپتاپ اپل",category:"laptop",subCategory:"apple"}
    ]
    const [data, setdata] = useState([]);
    const [list, setlist] = useState([]);

    const [open_mobile, setopenM] = useState(false);
    const [open_laptop, setOpenL] = useState(false);
    const [open_mobileM, setopenMM] = useState(false);
    const [open_laptopM, setOpenLM] = useState(false);
    const [openmodal, setmodal] = useState(false);
    const [first, setFirst] = useState(true);
    const [valid, setvalid] = useState(true);
    const [login, setlogin] = useState(false);
    const [sort, setsort] = useState("date");
    const [click, setclick] = useState(false);
    const [sub, setsub] = useState("date");
    const [fromprice, setfromprice] = useState(0);
    const [toprice, settoprice] = useState(0);



const  handle_l=()=>{
    setdata(laptop_item);
    if(sub===""){
      setsub("date");
    }
    else{
    setsub("");
    }
}
const  handle_m=()=>{
    setdata(mobile_item);
    if(sub===""){
      setsub("date");
    }
    else{
    setsub("");
    }
}
const handlemin=()=>{
  setsort("priceasc")
}
const handlemax=()=>{
    setsort("pricedsc");
}
const handlenew=()=>{
   setsort("date");
}

const handd=(item)=>{
    setsub(item);
 }
 
const price_from=(e)=>{
  setfromprice(e.target.value);
}

const price_to =(e)=>{
  settoprice(e.target.value);
}
const send_filter_price =()=>{
  setlist(list.filter((p) => (p.min_price>=fromprice)&&(p.min_price<=toprice)));
}

const addFav = (id) => {
  authAxios
    .post(`http://localhost:9000/api/user/favorites/${id}`)
    .then()
    .catch((err) => console.log(err));
};



    useEffect(() => {
    if(title.category==="laptop"){
                setdata(laptop_item);
    }
    else{
              setdata(mobile_item);
    }

    
    const fetchList = async () => {
        const res = await axios
          .get(`http://localhost:9000/api/products?category=${title.category}&subCategory=${title.subCategory}&sort=${sort}`, {
            headers: {
              Authorization : `Bearer ${sessionStorage.getItem("token")}`
              }
          })
          .catch((err) => {
             setlist([]);
          });
        if (res) {
          await setlist(res.data.products);
        }
      };
      fetchList();
},[sort,sub]);
        return (
            <>
          

          <Nav 
              handle_laptop={handle_l}
              handle_mobile={handle_m}
          />
<span>
                <ul className="filter">
                {data.map((item) => (

                    <li  className="filter_item">    
            
                        <Link to={`/products/${item.category}/${item.subCategory}`} className="link_item"   onClick={()=>handd(item.subCategory)}   >  {item.name}    </Link>
                    </li>
                ))}
            
                                <li>
                    <span>
            <label htmlFor="start_price"> <br></br> از قیمت </label>
            <input type="text" id="start_price"  className="price_filter" onChange={price_from} />

                    </span>
                    <span>
                    <label htmlFor="end_price"> <br></br> تا قیمت</label>
                    <input type="text" id="end_price"  className="price_filter" onChange={price_to} />
                 </span>
                </li>
                <li>
                    <button className="button_filter" onClick={send_filter_price} >   فیلتر  </button>
                </li>

                </ul>
</span>

<div className="filters">
                    <span> <button className="newone" onClick={handlenew}> جدیدترین</button>  </span>
                    <span> <button className="min_price" onClick={handlemin}>  ارزان ترین </button>     </span>
                    <span>  <button className="max_price" onClick={handlemax}>  گران ترین   </button>  </span>
                    </div>
          {list.map((item) => {
              
            return(
            <span className="container">
                
              <div className="card">
              <img src={item.img} alt="Not Found" className="img"/>

                <div className="nam" >
                <Link to={`/product/${item._id}`} className="card-name">
                  {item.name}
                </Link>
                </div>
                <div className="card-inf">
                  <div>{item.min_price} millionin toman</div>
                  <div>  <button className="card_button"  onClick={() => addFav(item._id)} >  افزودن به لیست محبوب ها </button> </div>
                </div>
              
              </div>
            </span>
            );
        })}
</>

);
};
export default ResSearch;
