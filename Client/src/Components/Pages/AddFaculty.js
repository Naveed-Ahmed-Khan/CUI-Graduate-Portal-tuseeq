import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function AddStudent() {
  const handleSubmit = (event) => {
    event.preventDefault();
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
      });*/
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          id="standard-basic"
          sx={{
            width: "100%",
            marginBottom: "15px",
          }}
          label="First Name"
          name="fname"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Last Name"
          name="lname"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Father/Husband Name"
          name="father/husband name"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Nationality"
          name="nationality"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="City"
          name="city"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Email"
          name="email"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Designation"
          name="designation"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Department"
          name="department"
          color="secondary"
          variant="outlined"
        />

        <TextField
          id="standard-basic"
          sx={{ width: "100%", marginBottom: "15px" }}
          label="Campus"
          name="campus"
          color="secondary"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
        >
          Add Faculty
        </Button>
      </Box>
    </>
  );
}
