
import React from "react";
import { useParams } from "react-router-dom";
import style from "./Report.module.css";
import { useEffect, useState } from "react";
import axios from "axios";


const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
const Report = () => {

    const {id} = useParams();

 
      
        const [report, setreports] = useState();
      
        useEffect(() => {
          authAxios
            .get(`http://localhost:9000/api/user/${id}/reports`)
            .then((res) => setreports(res.data.reports))
            .catch((err) => console.log(err));
        }, []);
      

    return (
        <>
          <div className={`${style.header}`}>گزارش ها</div>
          <ul className={style.ul}>
            {report === undefined
              ? ""
              : report.map((item) => (
                  <li >
                      <div>{item.description} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.typ} </div>
                  </li>
                ))}
    
          </ul>
        </>
      );
              }
            

export default Report;