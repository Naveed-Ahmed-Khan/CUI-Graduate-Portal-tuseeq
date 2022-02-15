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
        sx={{
          width: "100%",
          marginBottom: "15px",
        }}
        label="Registration No."
        color="secondary"
        variant="outlined"
      />

      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Name"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Email"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Mobile"
        color="secondary"
        variant="outlined"
      />
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Program</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Program"
            //onChange={handleChange}
          >
            <MenuItem value={12}>PhD (CS)</MenuItem>
            <MenuItem value={14}>MS (CS)</MenuItem>
            <MenuItem value={15}>MS (SE)</MenuItem>
            <MenuItem value={15}>MS (IS)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">
            Course Work Completion
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Course Work Completion"
            //onChange={handleChange}
          >
            <MenuItem value="1">N/A</MenuItem>
            <MenuItem value="15">SP11</MenuItem>
            <MenuItem value="16">FA11</MenuItem>
            <MenuItem value="17">SP12</MenuItem>
            <MenuItem value="18">FA12</MenuItem>
            <MenuItem value="19">SP13</MenuItem>
            <MenuItem value="20">FA13</MenuItem>
            <MenuItem value="21">SP14</MenuItem>
            <MenuItem value="22">FA14</MenuItem>
            <MenuItem value="23">SP15</MenuItem>
            <MenuItem value="24">FA15</MenuItem>
            <MenuItem value="25">SP16</MenuItem>
            <MenuItem value="26">FA16</MenuItem>
            <MenuItem value="27">SP17</MenuItem>
            <MenuItem value="28">FA17</MenuItem>
            <MenuItem value="29">SP18</MenuItem>
            <MenuItem value="30">FA18</MenuItem>
            <MenuItem value="31">SPRING 2019</MenuItem>
            <MenuItem value="32">FALL 2019</MenuItem>
            <MenuItem value="33">SPRING 2020</MenuItem>
            <MenuItem value="1033">FALL 2020</MenuItem>
            <MenuItem value="1034">SPRING 2021</MenuItem>
            <MenuItem value="1036">FALL 2021</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Status"
        color="secondary"
        variant="outlined"
      />
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Supervisor"
            //onChange={handleChange}
          >
            <MenuItem value="237">-</MenuItem>
            <MenuItem value="4209">Dr. Adeel Anjum</MenuItem>
            <MenuItem value="25565">Dr. Adnan Akhunzada</MenuItem>
            <MenuItem value="2281">Dr. Ahmad R. Shahid</MenuItem>
            <MenuItem value="4208">Dr. Aimal Tariq Rextin</MenuItem>
            <MenuItem value="19072">Dr. Akber Abid Gardezi</MenuItem>
            <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
            <MenuItem value="3014">Dr. Ashfaq Hussain Farooqi</MenuItem>
            <MenuItem value="663">Dr. Assad Abbas</MenuItem>
            <MenuItem value="3012">Dr. Basit Raza</MenuItem>
            <MenuItem value="2089">Dr. Farhana Jabeen</MenuItem>
            <MenuItem value="252">Dr. Hasan Ali Khattak</MenuItem>
            <MenuItem value="2187">Dr. Iftikhar Azim Niaz</MenuItem>
            <MenuItem value="253">Dr. Inayat-ur-Rehman</MenuItem>
            <MenuItem value="284">Dr. Javed Iqbal</MenuItem>
            <MenuItem value="654">Dr. Majid Iqbal Khan</MenuItem>
            <MenuItem value="3344">Dr. Malik Ahmad Kamran</MenuItem>
            <MenuItem value="633">Dr. Mansoor Ahmed</MenuItem>
            <MenuItem value="264">Dr. Mariam Akbar</MenuItem>
            <MenuItem value="4243">Dr. Masoom Alam</MenuItem>
            <MenuItem value="2678">Dr. Mubeen Ghafoor</MenuItem>
            <MenuItem value="282">Dr. Muhammad Asim Noor</MenuItem>
            <MenuItem value="263">Dr. Muhammad Imran</MenuItem>
            <MenuItem value="281">Dr. Muhammad Manzoor ilahi Tamimy</MenuItem>
            <MenuItem value="19074">Dr. Muhammad Waqar</MenuItem>
            <MenuItem value="243">Dr. Mukhtar Azeem</MenuItem>
            <MenuItem value="3356">Dr. Munam Ali Shah</MenuItem>
            <MenuItem value="1211">Dr. Nadeem Javaid</MenuItem>
            <MenuItem value="1644">Dr. Naveed Ahmad</MenuItem>
            <MenuItem value="659">Dr. Saif ur Rehman Khan</MenuItem>
            <MenuItem value="280">Dr. Saif Ur Rehman Malik</MenuItem>
            <MenuItem value="10430">Dr. Sajjad A. Madani</MenuItem>
            <MenuItem value="272">Dr. Shahid Hussain</MenuItem>
            <MenuItem value="19178">Dr. Sheneela Naz</MenuItem>
            <MenuItem value="240">Dr. Syed Sohaib Ali</MenuItem>
            <MenuItem value="245">Dr. Tahir Mustafa Madni</MenuItem>
            <MenuItem value="784">Dr. Tehseen Zia</MenuItem>
            <MenuItem value="19205">Dr. Usman Yaseen</MenuItem>
            <MenuItem value="273">Dr. Uzair Iqbal</MenuItem>
            <MenuItem value="3100">Dr. Yasir Faheem</MenuItem>
            <MenuItem value="3656">Dr. Zobia Rehman</MenuItem>
            <MenuItem value="6899">Prof. Dr. Muaz A. Niazi</MenuItem>
            <MenuItem value="4564">Prof. Dr. Sohail Asghar</MenuItem>
            <MenuItem value="25568">Supervisor</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 120, marginBottom: "15px" }}>
        <FormControl fullWidth color="secondary">
          <InputLabel id="demo-simple-select-label">Co-Supervisor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={Program}
            label="Co-Supervisor"
            //onChange={handleChange}
          >
            <MenuItem value="237">-</MenuItem>
            <MenuItem value="4209">Dr. Adeel Anjum</MenuItem>
            <MenuItem value="25565">Dr. Adnan Akhunzada</MenuItem>
            <MenuItem value="2281">Dr. Ahmad R. Shahid</MenuItem>
            <MenuItem value="4208">Dr. Aimal Tariq Rextin</MenuItem>
            <MenuItem value="19072">Dr. Akber Abid Gardezi</MenuItem>
            <MenuItem value="6925">Dr. Amir Hanif Dar</MenuItem>
            <MenuItem value="3014">Dr. Ashfaq Hussain Farooqi</MenuItem>
            <MenuItem value="663">Dr. Assad Abbas</MenuItem>
            <MenuItem value="3012">Dr. Basit Raza</MenuItem>
            <MenuItem value="2089">Dr. Farhana Jabeen</MenuItem>
            <MenuItem value="252">Dr. Hasan Ali Khattak</MenuItem>
            <MenuItem value="2187">Dr. Iftikhar Azim Niaz</MenuItem>
            <MenuItem value="253">Dr. Inayat-ur-Rehman</MenuItem>
            <MenuItem value="284">Dr. Javed Iqbal</MenuItem>
            <MenuItem value="654">Dr. Majid Iqbal Khan</MenuItem>
            <MenuItem value="3344">Dr. Malik Ahmad Kamran</MenuItem>
            <MenuItem value="633">Dr. Mansoor Ahmed</MenuItem>
            <MenuItem value="264">Dr. Mariam Akbar</MenuItem>
            <MenuItem value="4243">Dr. Masoom Alam</MenuItem>
            <MenuItem value="2678">Dr. Mubeen Ghafoor</MenuItem>
            <MenuItem value="282">Dr. Muhammad Asim Noor</MenuItem>
            <MenuItem value="263">Dr. Muhammad Imran</MenuItem>
            <MenuItem value="281">Dr. Muhammad Manzoor ilahi Tamimy</MenuItem>
            <MenuItem value="19074">Dr. Muhammad Waqar</MenuItem>
            <MenuItem value="243">Dr. Mukhtar Azeem</MenuItem>
            <MenuItem value="3356">Dr. Munam Ali Shah</MenuItem>
            <MenuItem value="1211">Dr. Nadeem Javaid</MenuItem>
            <MenuItem value="1644">Dr. Naveed Ahmad</MenuItem>
            <MenuItem value="659">Dr. Saif ur Rehman Khan</MenuItem>
            <MenuItem value="280">Dr. Saif Ur Rehman Malik</MenuItem>
            <MenuItem value="10430">Dr. Sajjad A. Madani</MenuItem>
            <MenuItem value="272">Dr. Shahid Hussain</MenuItem>
            <MenuItem value="19178">Dr. Sheneela Naz</MenuItem>
            <MenuItem value="240">Dr. Syed Sohaib Ali</MenuItem>
            <MenuItem value="245">Dr. Tahir Mustafa Madni</MenuItem>
            <MenuItem value="784">Dr. Tehseen Zia</MenuItem>
            <MenuItem value="19205">Dr. Usman Yaseen</MenuItem>
            <MenuItem value="273">Dr. Uzair Iqbal</MenuItem>
            <MenuItem value="3100">Dr. Yasir Faheem</MenuItem>
            <MenuItem value="3656">Dr. Zobia Rehman</MenuItem>
            <MenuItem value="6899">Prof. Dr. Muaz A. Niazi</MenuItem>
            <MenuItem value="4564">Prof. Dr. Sohail Asghar</MenuItem>
            <MenuItem value="25568">Supervisor</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Title"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Registration"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Track"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Area of Specialization"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Comprehensive"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Foriegn Submission"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Other Issue"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Synopsis Status"
        color="secondary"
        variant="outlined"
      />
      <TextField
        id="standard-basic"
        sx={{ width: "100%", marginBottom: "15px" }}
        label="Thesis Status"
        color="secondary"
        variant="outlined"
      />
      <Button type="submit" variant="contained" size="large" color="secondary">
        Add Student
      </Button>
    </Box>
  );
}
