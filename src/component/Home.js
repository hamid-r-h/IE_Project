import React from "react";
import {useState } from "react";
import torob from "../img/torob.jpg"
import { useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';
import SignModal from "./SignModal"

const Home = () => {
  useEffect(() => {
   
  }, []);
  const mobile_item=[":گوشی موبایل","گوشی سامسونگ","گوشی اپل"," گوشی شیائومی",":تبلت"," تبلت سامسونگ"," تبلت شیائومی"," تبلت اپل"]
  const laptop_item=[":لپتاپ","لپ تاپ لنوو" , "لپ تاپ ایسوس" , "لپتاپ اپل"]
  const [open_mobile, setopenM] = useState(false);
  const [open_laptop, setOpenL] = useState(false);
  const [open_mobileM, setopenMM] = useState(false);
  const [open_laptopM, setOpenLM] = useState(false);
  const [openmodal, setmodal] = useState(false);
  const [first, setFirst] = useState(true);

 const handleMtab=()=>{
   if(open_mobile)
    setopenM(false);
    else{
    setopenM(true);
    if(open_laptop)
    setOpenL(false);    
  }
}

  const handleLtab=()=>{
    if(open_laptop)
     setOpenL(false);
     else{
     setOpenL(true);
     if(open_mobile)
    setopenM(false);
   }
  }

  const handleMMtab=()=>{
    if(open_mobileM)
     setopenMM(false);
     else{
     setopenMM(true);
     if(open_laptopM)
     setOpenLM(false);    
   }
 }
 const handleclose=()=>{
   setopenMM(false);
   setOpenLM(false);
 }
 
   const handleLMtab=()=>{
     if(open_laptopM)
      setOpenLM(false);
      else{
      setOpenLM(true);
      if(open_mobileM)
     setopenMM(false);
    }
   }

   const handlemodal=()=>{
    if(openmodal){
    setmodal(false);
    setFirst(true);
    }
    else
    setmodal(true)
   }
   const handlefirst=()=>{
    setFirst(false);
   }
   
 
    return(
<div>
    <div className="navbar">
         <ul className="navbar-item">
             <li className="sign" onClick={handlemodal}> ورود/ثبت نام </li>
             <li className="laptop"  onClick={handleLtab}> لپ تاپ </li>
             <li className="mobile" onClick={handleMtab}> موبایل و تبلت </li>
         </ul>
        


    <label htmlFor="hamburger-input" className="icon-burger">
         <span className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </span>
   </label>

   <ul className="list1">
            { open_laptop &&  laptop_item.map((item) => (
               <ListItem sx={{ml:58}}>

                <ListItemText primary={item} primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }} />
                            </ListItem>

            ))}
     </ul>
   
         
            <ul className="list2">
            { open_mobile &&  mobile_item.map((item) => (
              <ListItem  sx={{mr:4,mt:0}}>
                <ListItemText primary={item} primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }} />
              </ListItem>
            ))}
         </ul>



</div>

    
   
       


  <input type="checkbox" id="hamburger-input" className="burger-shower" onClick={handleclose} />
  <span className="sign-mini">      ورود/ثبت نام  </span>
        <div className="drop-down">

            <ul>
                <li className=""  onClick={handleLMtab}> لپ تاپ </li>
                <li className=""  onClick={handleMMtab}> موبایل و تبلت </li>
           </ul>
         
        </div>

        <ul className="list3">

            { open_laptopM &&  laptop_item.map((item) => (

               <ListItem sx={{ml:15}}>

                <ListItemText primary={item} primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }} />
                            </ListItem>


            ))}
              </ul>

   
         
          
            { open_mobileM &&  mobile_item.map((item) => (
                <ul className="list4">
              <ListItem  sx={{ml:15,mb:-1}}>
                <ListItemText primary={item} primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }} />
              </ListItem>
              </ul>
            ))}
        



      <div className="title">
              <img src={torob} alt="torob"/>
              <div className="title-first">
              <h1> ترب </h1>
              <p>موتور جستجوی هوشمند خرید</p> 
              </div>
     
      <div className="input-icons">
          <input type="text" placeholder="                                        نام کالا را وارد کنید " name="search" />
          <i className="fa fa-search fa-lg" aria-hidden="true" ></i>
      </div>
    </div>

    <SignModal modal={openmodal}  handle={handlemodal} first_page={first} handlepage={handlefirst}  /> : <div/>

   </div>
    


    );
}
export default Home; 