import { Box, styled, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./Create.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.neutral.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.neutral.main,
    scale: "0.9",
  },
}));
const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();
  return (
    <Box  autoComplete="off" sx={{width:"380px"}} component="form">
      <TextField
        onChange={(eo) => {
          settitle(String(eo.target.value));
        }}
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />

      <TextField
        onChange={(eo) => {
          setprice(Number(eo.target.value));
        }}
        fullWidth={true}
        label=" Amount"
        sx={{ mt: "22px", display: "block" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
      />



      <ColorButton
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ price, title }),
          }).then(() => {
            navigate("/")
          }
          )

        }}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit
        <ChevronRightIcon />
      </ColorButton>
    </Box>
  );
};

export default Create;
