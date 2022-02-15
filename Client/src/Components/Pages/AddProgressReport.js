import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function AddProgressReport() {
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
      }); */
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        id="standard-basic"
        color="secondary"
        label="Student"
        variant="outlined"
        sx={{ width: "100%", marginBottom: "15px" }}
      />

      <TextField
        id="standard-basic"
        color="secondary"
        label="Session"
        variant="outlined"
        sx={{ width: "100%", marginBottom: "15px" }}
      />

      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //v
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value="Satisfactory">Satisfactory</MenuItem>
            <MenuItem value="Unsatisfactory">Unsatisfactory</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Absent">Absent</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        color="secondary"
        fullWidth
        sx={{ marginBottom: "15px" }}
        id="outlined-multiline-flexible"
        label="Comment"
        multiline
        maxRows={8}
      />

      <Button type="submit" variant="contained" color="secondary" size="large">
        Add Progress Report
      </Button>
    </Box>
  );
}
