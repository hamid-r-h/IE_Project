import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

const SignModal = ({
  modal,
  handle,
  first_page,
  handlepage,
  valid,
  handlevalid,
  log_in,
}) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [messag, setmessage] = useState("");

  const [click, setclick] = useState(false);
  const [counter, setcounter] = useState(0);
  const [log_click, setlog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  
  useEffect(() => {
    const fetchRegister = async () => {
      const res = await axios
        .post("http://localhost:9000/api/auth/signup", {
          username: username,
          email: email,
          password: password,
        })
        .catch((err) => {
          setmessage(err.response.data.error.message);
        });
      if (res) {
        await setmessage(res.data.message);
        sessionStorage.setItem("token",res.data.token );
        log_in();

      }
    };

    const fetchLogin = async () => {
      const res = await axios
        .post("http://localhost:9000/api/auth/login", {
          username: username,
          password: password,
        })
        .catch((err) => {
          setmessage(err.response.data.error.message);
        });
      if (res) {
        await setmessage(res.data.message);
        sessionStorage.setItem("token",res.data.token );
        log_in();
      }
    };
    

    if (click) {
      fetchRegister();
      setclick(false);
    }

    if (log_click) {
      fetchLogin();
      setlog(false);
    }

    console.log(counter);
  }, [click, log_click]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);



  const handlepass = (e) => {
    setpassword(e.target.value);
  };

  const handleusername = (e) => {
    setusername(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handlesign = async () => {
    setclick(true);
    handlevalid();
  };
  const handlelog = async () => {
    setlog(true);
    console.log(messag);
    handlevalid();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 530,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pl: 10,
    pt: 7,
  };

  return (
    <div>
      <Modal
        open={modal}
        onClose={handle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{ color: "#212121", fontSize: 25, display: "flex" }}
            dir="rtl"
          >
            نام کاربری
          </InputLabel>

          <TextField
            dir="rtl"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "55ch" }}
            onChange={handleusername}
          />

          {!first_page && (
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ color: "#212121", fontSize: 25, pt: 4 }}
              dir="rtl"
            >
              ایمیل
            </InputLabel>
          )}
          {!first_page && (
            <TextField
              dir="rtl"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "55ch" }}
              onChange={handleemail}
            >
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
              ></IconButton>
            </TextField>
          )}

          <InputLabel
            shrink
            htmlFor="outlined-adornment-password"
            sx={{ color: "#212121", fontSize: 25, pt: 4 }}
            dir="rtl"
          >
            رمز عبور
          </InputLabel>
          <TextField
           type={showPassword ? "text" : "password"}
            dir="rtl"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "55ch" }}
            onChange={handlepass}
            InputProps={{ // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                   {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  </InputAdornment>
                     )
                    }}
          />
          {first_page && (
            <div>
              <Button
                variant="contained"
                size="large "
                sx={{ ml: 23, mt: 4, pl: 7, pr: 7, mb: 3 }}
                onClick={handlelog}
              >
                ورود
              </Button>
            </div>
          )}
          {!first_page && (
            <div>
              <Button
                variant="contained"
                size="large"
                sx={{ ml: 23, mt: 2, pl: 7, pr: 7 }}
                onClick={handlesign}
              >
                ثبت نام
              </Button>
            </div>
          )}

          {first_page && (
            <Button
              variant="text"
              onClick={() => {
                handlepage();
              }}
            >
              اگر ثبت نام نکرده اید ابتدا ثبت نام کنید
            </Button>
          )}
          {messag !== "ok" && messag !== "successful" && !valid && (
            <Typography sx={{ mt: 2, color: "red" }}>{messag}</Typography>
          )}

          {messag === "ok" && !valid && (
            <Typography sx={{ mt: 2, color: "green", fontSize: 18 }}>
              ثبت نام با موفقیت انجام شد
            </Typography>
          )}

          {messag === "successful" && (
            <Typography sx={{ mt: 2, color: "green", fontSize: 18 }}>
              وارد حساب خود شدید
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
};
export default SignModal;
