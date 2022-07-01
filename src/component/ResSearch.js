import Nav from "./Nav"
import React from "react";

import { Link } from "react-router-dom";
import { useParams} from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ResSearch = () => {




    const title=useParams();
    const mobile_item = [{ name:":گوشی موبایل",link:"mobile"}
    ,{name:"گوشی سامسونگ",link:"msamsung"}
    ,{name:"گوشی اپل",link:"mapple"},
      {name:"گوشی شیائومی",link:"mxiomi"},
      {name:":تبلت" , link:"tablet"},
      {name:" تبلت سامسونگ",link:"tsamsung"},
      {name:" تبلت شیائومی",link:"txiomi"},
      {name:" تبلت اپل",link:"tapple"}
    ]
    const laptop_item=
    [{ name:":لپتاپ",link:"laptop"}
    ,{name:"لپ تاپ لنوو",link:"lenovo"}
    ,{name:"لپتاپ ایسوس",link:"asus"},
      {name:"لپتاپ اپل",link:"apple"}
    ]
    const [data, setdata] = useState([]);
    const [list, setlist] = useState([]);


    useEffect(() => {
    if(title.category==="lenovo" || title.category==="laptop" || title.category==="asus" || title.category==="apple"){
                setdata(laptop_item);
    }
    else{
        setdata(mobile_item);
    }

    
    const fetchList = async () => {
        const res = await axios
          .get(`http://localhost:9000/api/products?category=${title}&sort=date`, {
          
          })
          .catch((err) => {
              
          });
        if (res) {
          await setlist(res.data.products);
        }
      };

},[data]);
        return (
            <>
          

          {<Nav/>}
<span>
                <ul className="filter">
                {data.map((item) => (

                    <li>    
                        {item.name}
                    </li>
                ))}
            
                                <li>
                    <span>
            <label htmlFor="start_price" className="price_filter">  از قیمت </label>
            <input type="text" id="start_price" />

                    </span>
                    <span>
                    <label htmlFor="end_price"> <br></br> تا قیمت</label>
                    <input type="text" id="end_price" />
                 </span>
                </li>
                <li>
                    <button className="button_filter" >   فیلتر  </button>
                </li>

                </ul>
</span>
          {list.map((item) => (
              

            <span className="container">
                
              <div className="card">
                <div className="nam" >
                <Link to={`/products/${item.name}`} className="card-name">
                  {item.name}
                </Link>
                </div>
                <div className="card-inf">
                  <div>{item.prices.price}تومان</div>
                  <div>{item.price.link}</div>
                </div>
              
              </div>
            </span>
 

          ))}
</>

);
};
export default ResSearch;
