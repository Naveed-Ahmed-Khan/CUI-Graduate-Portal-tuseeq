import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Box } from "@mui/material";

export default function ChangePassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /* axios.post("http://localhost:3000/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const data = res.data.user;
	console.log(data);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      }); */
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Old Password"
        color="secondary"
        variant="outlined"
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="New Password"
        color="secondary"
        variant="outlined"
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Confirm Password"
        color="secondary"
        variant="outlined"
      />

      <Button type="submit" variant="contained" size="large" color="secondary">
        Update Password
      </Button>
    </Box>
  );
}
