import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SendNotificationMS() {
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
      <Box>
        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="demo-simple-select-label">Registration No</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Registration No"
          >
            <MenuItem value={5918}>SP21-PCS-003</MenuItem>
            <MenuItem value={5923}>SP21-PCS-001</MenuItem>
            <MenuItem value={4918}>SP20-PCS-003</MenuItem>
            <MenuItem value={3698}>SP20-PCS-001</MenuItem>
            <MenuItem value={5917}>SP19-PCS-004</MenuItem>
            <MenuItem value={3689}>SP19-PCS-001</MenuItem>
            <MenuItem value={3576}>SP18-PCS-004</MenuItem>
            <MenuItem value={239}>SP18-PCS-003</MenuItem>
            <MenuItem value={3697}>SP18-PCS-001</MenuItem>
            <MenuItem value={3594}>SP17-PCS-005</MenuItem>
            <MenuItem value={2503}>SP17-PCS-001</MenuItem>
            <MenuItem value={2514}>SP15-PCS-006</MenuItem>
            <MenuItem value={6098}>SP15-PCS-005</MenuItem>
            <MenuItem value={1428}>SP15-PCS-004</MenuItem>
            <MenuItem value={1383}>SP15-PCS-003</MenuItem>
            <MenuItem value={3575}>SP15-PCS-002</MenuItem>
            <MenuItem value={3701}>SP15-PCS-001</MenuItem>
            <MenuItem value={1487}>SP14-PCS-007</MenuItem>
            <MenuItem value={3584}>SP00-PCS-000</MenuItem>
            <MenuItem value={6071}>FA20-PCS-004</MenuItem>
            <MenuItem value={6070}>FA20-PCS-003</MenuItem>
            <MenuItem value={5920}>FA20-PCS-002</MenuItem>
            <MenuItem value={3685}>FA19-PCS-002</MenuItem>
            <MenuItem value={3722}>FA18-PCS-004</MenuItem>
            <MenuItem value={3581}>FA18-PCS-002</MenuItem>
            <MenuItem value={1499}>FA18-PCS-001</MenuItem>
            <MenuItem value={1387}>FA17-PCS-014</MenuItem>
            <MenuItem value={3572}>FA17-PCS-013</MenuItem>
            <MenuItem value={3596}>FA17-PCS-008</MenuItem>
            <MenuItem value={3711}>FA17-PCS-007</MenuItem>
            <MenuItem value={3679}>FA17-PCS-005</MenuItem>
            <MenuItem value={2512}>FA17-PCS-003</MenuItem>
            <MenuItem value={5924}>FA17-PCS-001</MenuItem>
            <MenuItem value={1434}>FA16-PCS-007</MenuItem>
            <MenuItem value={1385}>FA16-PCS-004</MenuItem>
            <MenuItem value={3652}>FA16-PCS-003</MenuItem>
            <MenuItem value={3700}>FA16-PCS-001</MenuItem>
            <MenuItem value={3681}>FA15-PCS-007</MenuItem>
            <MenuItem value={3693}>FA15-PCS-005</MenuItem>
            <MenuItem value={2511}>FA15-PCS-001</MenuItem>
            <MenuItem value={3880}>FA14-PCS-014</MenuItem>
            <MenuItem value={2510}>FA14-PCS-011</MenuItem>
            <MenuItem value={3688}>FA14-PCS-010</MenuItem>
            <MenuItem value={1436}>FA14-PCS-007</MenuItem>
            <MenuItem value={3680}>FA14-PCS-004</MenuItem>
            <MenuItem value={3696}>FA14-PCS-003</MenuItem>
            <MenuItem value={3895}>FA14-PCS-001</MenuItem>
            <MenuItem value={3573}>FA13-PCS-007</MenuItem>
            <MenuItem value={2502}>FA13-PCS-004</MenuItem>
            <MenuItem value={2507}>FA13-PCS-003</MenuItem>
            <MenuItem value={3574}>FA13-PCS-002</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="standard-basic"
        color="secondary"
        label="Student Name"
        variant="outlined"
        sx={{ width: "100%", marginBottom: "15px" }}
      />

      <TextField
        color="secondary"
        fullWidth
        sx={{ marginBottom: "15px" }}
        id="outlined-multiline-flexible"
        label="Notification"
        multiline
        maxRows={8}
      />

      <Button type="submit" variant="contained" color="secondary" size="large">
        Send Notification
      </Button>
    </Box>
  );
}
