import { ProductionQuantityLimitsSharp } from "@mui/icons-material"
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"
import { useParams} from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ReportModal from "./ReportModal";
const Products = () => {


    const itm= {
        "category": "smartphone",
        "min_price": 1000,
        "max_price": 2000,
        "img": "https://storage.torob.com/backend-api/base/images/tw/oM/twoM17-0-mjKj4w8.jpg_/216x216.jpg",
        "last_ipdate": "1400/11/12",
        "prices":[{"name":"ofogh korosh","price":100,"link":"http://products/mobile/a52"},{"name":"foroshgah haft","price":13,"link":"http://products/mobile/s5"},{"name":"foroshgah refah","price":15,"link":"http://products/mobile/a71"}],
    }


const [openmodal, setmodal] = useState(false);
const [item, setitem] = useState(itm);
const [clicked_shopid, setshopid] = useState("");


const title=useParams();


const handlemodal = (e) => {
    setshopid(e);
    console.log(clicked_shopid);
    if (openmodal) {
      setmodal(false);
    } else{
     setmodal(true);
    }
    
  };



    useEffect(() => {
        
        const fetchitem = async () => {
            console.log(title);
            const res = await axios
              .get(`http://localhost:9000/api/products/${title.id}`, {
                headers: {
                  Authorization : `Bearer ${sessionStorage.getItem("token")}`
                  }
              })
              .catch((err) => {
                 setitem([]);
              });
            if (res) {
              await setitem(res.data.product);
              console.log(res.data.product)
            }
          };
          fetchitem();
    },[]);


 

    return(
        <>

        <div>
        <Nav/>

              <div className="detail">
              <img src={item.img} alt="Not Found" className="img"/>

                <div className="detail_title" >
                <Link to={`/products/${item.name}`} className="detail_name">
                  {item.title}
                </Link>
                </div>
                <div className="detail_inf">
                  <div>MIN : {item.min_price} miloins toman<br></br>MAX : {item.max_price} miloins toman</div>
                </div>
                <div className="last_update">  LastUpdate : {item.last_ipdate}    </div>

              </div>
              </div>
              
              {item.prices.map((items) => {
                       return(
                        <div className="layout-cart">
                        <div className="contain-cart">
                        <span className="title-cart">
                        {items.name} &nbsp; &nbsp; &nbsp;  <Link to={items.link}> لینک فروشگاه  </Link>

                        </span>
                        <span className="price-cart">
                         
                        {items.price} miloins tomans
                        
                        <div>
                            <button onClick={()=>handlemodal(items.shopid)}> گزارش </button>
                        </div>
                        </span>
                        </div>
                        </div>

                       )
              })}
                  <ReportModal
        modal={openmodal}
        handle={handlemodal}
        shopid={clicked_shopid}
      />   
          
              </>

    );


}
export default Products;