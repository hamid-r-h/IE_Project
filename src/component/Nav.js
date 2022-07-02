import React from "react";
import { useState } from "react";
import torob from "../img/torob.jpg";
import { useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Grid from "@mui/material/Grid";
import SignModal from "./SignModal";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import Box from "@mui/material/Box";
import { display } from "@mui/system";
import { Block } from "@mui/icons-material";

const Nav = ({handle_laptop,handle_mobile}) => {
    const mobile_item = [{ name:":گوشی موبایل",category:"mobile",subcategory:""}
    ,{name:"گوشی سامسونگ",category:"mobile",subcategory:"samsung"}
    ,{name:"گوشی اپل",category:"mobile",subcategory:"apple"},
      {name:"گوشی شیائومی",category:"mobile",subcategory:"xiaomi"},
      {name:":تبلت" ,category:"tablet",subcategory:""},
      {name:" تبلت سامسونگ",category:"tablet",subcategory:"samsung"},
      {name:" تبلت شیائومی",category:"tablet",subcategory:"xiaomi"},
      {name:" تبلت اپل",category:"tablet",subcategory:"apple"}
    ]
    const laptop_item=
    [{ name:":لپتاپ",category:"laptop",subcategory:""}
    ,{name:"لپ تاپ لنوو",category:"laptop",subcategory:"lenovo"}
    ,{name:"لپتاپ ایسوس",category:"laptop",subcategory:"asus"},
      {name:"لپتاپ اپل",category:"laptop",subcategory:"apple"}
    ]
    const [open_mobile, setopenM] = useState(false);
    const [open_laptop, setOpenL] = useState(false);
    const [open_mobileM, setopenMM] = useState(false);
    const [open_laptopM, setOpenLM] = useState(false);
    const [openmodal, setmodal] = useState(false);
    const [first, setFirst] = useState(true);
    const [valid, setvalid] = useState(true);
    const [login, setlogin] = useState(false);






    const handleMtab = () => {
        if (open_mobile) setopenM(false);
        else {
          setopenM(true);
          if (open_laptop) setOpenL(false);
        }
      };
    
      const handleLtab = () => {
        if (open_laptop) setOpenL(false);
        else {
          setOpenL(true);
          if (open_mobile) setopenM(false);
        }
      };
    
      const handleMMtab = () => {
        if (open_mobileM) setopenMM(false);
        else {
          setopenMM(true);
          if (open_laptopM) setOpenLM(false);
        }
      };
      const handleclose = () => {
        setopenMM(false);
        setOpenLM(false);
      };
    
      const handleLMtab = () => {
        if (open_laptopM) setOpenLM(false);
        else {
          setOpenLM(true);
          if (open_mobileM) setopenMM(false);
        }
      };

      const handlemodal = () => {
        if (openmodal) {
          setmodal(false);
          setFirst(true);
          setvalid(true);
        } else setmodal(true);
      };
      const handlefirst = () => {
        setFirst(false);
      };

      const handlevalid = () => {
        setvalid(false);
      };
     const  handlelogin = ()=>{
       if(login){
        setlogin(false);
        sessionStorage.clear();
       }
        else
        setlogin(true);
     }


      return (
          <div>
<div className={`${style.navbar}`}>
        <ul className={`${style.navbar_item}`}>
          {!login &&(
          <li className={`${style.sign}`} onClick={handlemodal}>
            {" "}
            ورود/ثبت نام{" "}
          </li>
          )}
           {login &&(
          <li className={`${style.sign}`} >
            {" "}
               <Link to={"/profile"}>  پروفایل  </Link>  {" "}
          </li>
          )}
          <li className={`${style.laptop}`} onClick={handleLtab}>
            {" "}
            لپ تاپ{" "}
          </li>
          <li className={`${style.mobile}`} onClick={handleMtab}>
            {" "}
            موبایل و تبلت{" "}
          </li>
        </ul>

        <label htmlFor={`${style.hamburger_input}`} className={`${style.icon_burger}`}>
          <span className={`${style.lines}`}>
            <div className={`${style.line}`}></div>
            <div className={`${style.line}`}></div>
            <div className={`${style.line}`}></div>
          </span>
        </label>

        <ul className={`${style.list1}`}>
          {open_laptop &&
            laptop_item.map((item) => (
            
              <ListItem sx={{ ml: 58}}    button component={Link} to={`/products/${item.category}/${item.subcategory}`} onClick={handle_laptop}  >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                />
              </ListItem>
            ))}
        </ul>

        <ul className={`${style.list2}`}>
          {open_mobile &&
            mobile_item.map((item) => (
              
              <ListItem sx={{ mr: 4, mt: 0 }}  button  component={Link} to={`/products/${item.category}/${item.subcategory}`} onClick={handle_mobile}   >
                <ListItemText
                button  component={Link} to={`/products/${item.link}`}
                  primary={item.name}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: "medium",
                    lineHeight: "20px",
                    mb: "2px",
                  }}
                />
              </ListItem>
            ))}
        </ul>
      </div>
      <input
        type="checkbox"
        id={`${style.hamburger_input}`}
        className={`${style.burger_shower}`}
        onClick={handleclose}
      />
      {!login && (
      <span className={`${style.sign_mini}`} onClick={handlemodal}>
        {" "}
        ورود/ثبت نام{" "}
      </span>
      )}
        {login && (
      <span className={`${style.sign_mini}`}>
        {" "}
        <Link to={"/profile"}>  پروفایل  </Link>  {" "}
      </span>
      )}
      <div className={`${style.drop_down}`}>
        <ul>
          <li className="" onClick={handleLMtab}>
            {" "}
            لپ تاپ{" "}
          </li>
          <li className="" onClick={handleMMtab}>
            {" "}
            موبایل و تبلت{" "}
          </li>
        </ul>
      </div>
      <ul className={`${style.list3}`}>
        {open_laptopM &&
          laptop_item.map((item) => (
            <ListItem sx={{ ml: 15 }}  button  component={Link} to={`/products/${item.category}/${item.subcategory}`}   onClick={handle_laptop} >
              <ListItemText
              button  component={Link} to={`/products/${item.link}`}
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
              />
            </ListItem>
          ))}
      </ul>
      {open_mobileM &&
        mobile_item.map((item) => (
          <ul className={`${style.list4}`}>
            <ListItem sx={{ ml: 15, mb: -1 }}  button  component={Link} to={`/products/${item.category}/${item.subcategory}`} onClick={handle_mobile} >
              <ListItemText
              button  component={Link} to={`/products/${item.link}`}
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: "medium",
                  lineHeight: "20px",
                  mb: "2px",
                }}
              />
            </ListItem>
          </ul>
            ))}
             <SignModal
        modal={openmodal}
        handle={handlemodal}
        first_page={first}
        handlepage={handlefirst}
        valid={valid}
        handlevalid={handlevalid}
        log_in={handlelogin}

      />   

            
       <div />
    </div>



         );
    };
export default Nav;