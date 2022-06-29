import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import { makeStyles } from "@material-ui/core/styles";
import { bgcolor, color } from "@mui/system";
import { useState } from "react";

const SignModal = ({ modal, handle, first_page, handlepage }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 450,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pl: 20,
    pt: 8,
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
            sx={{ color: "#212121", fontSize: 25 }}
            dir="rtl"
          >
            نام کاربری
          </InputLabel>

          <TextField
            dir="rtl"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "55ch" }}
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
            />
          )}

          <InputLabel
            shrink
            htmlFor="bootstrap-input"
            sx={{ color: "#212121", fontSize: 25, pt: 4 }}
            dir="rtl"
          >
            رمز عبور
          </InputLabel>
          <TextField
            dir="rtl"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "55ch" }}
          />

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
        </Box>
      </Modal>
    </div>
  );
};
export default SignModal;
