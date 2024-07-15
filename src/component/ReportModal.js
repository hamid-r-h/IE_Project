
import Modal from "@mui/material/Modal";
import React from "react";
import Box from "@mui/material/Box";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
const ReportModal = ({modal,handle,shopid}) => {
    const [click, setclick] = useState(false);
    const [type, settype] = useState("");
    const [description, setdescription] = useState("");
    const [report, setreport] = useState({type:type, description:description});

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        height: 470,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        pl: 10,
        pt: 7,
        pr:2,
        borderRadius:5,
      };

      const send=()=>{
          setreport({typ:type,description:description});
        setclick(true);
     }
     
     const handleradio=(e)=>{
        settype(e.target.defaultValue);
        console.log(shopid);

     }
     const handletext=(e)=>{
        setdescription(e.target.value);
     }
     useEffect(() => {
        const fetchReport = async () => {
            console.log(shopid);

          await axios
            .post(`http://localhost:9000/api/user/${shopid}/report`, {
                reports:report
            },
            
            )
            
            .catch((err) => {
                console.log(err);

            });

        };
        if (click) {
          fetchReport();
          setclick(false);
        }
    
      }, [click]);
     
    
return(
    <div>
    <Modal
    open={modal}
    onClose={handle}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
            <Box sx={style}>
            <div className="problem">
                به چه مشکلی برخوردید
            </div>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={handleradio}
        >
            <FormControlLabel   labelPlacement="start" value=" کالا مربوط به این صفحه نیست" control={<Radio />} label="کالا مربوط به این صفحه نیست" />
            <FormControlLabel  labelPlacement="start" value="قیمت یا موجودی صحیح نیست" control={<Radio />} label="قیمت یا موجودی صحیح نیست" />
            <FormControlLabel  labelPlacement="start"  value="دیگر موارت" control={<Radio />} sx={{mb:3}} label="دیگر موارد" />
         </RadioGroup>
           
          <label htmlFor="html" className="lable_description">توضیحات</label><br/>
         <textarea rows="4" id="html" name="fav_language" className="description" onChange={handletext} />
        <button className="send_report"  onClick={send}> ثبت گزارش </button>

            </Box>
            </Modal>

      </div>
)
}
export default ReportModal;