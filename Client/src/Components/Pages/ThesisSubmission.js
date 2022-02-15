import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

export default function ThesisSubmission() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted");
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    /* axios
      .post("http://localhost:3000/auth/login", {
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
        label="Thesis Title"
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
        label="Thesis Track"
        color="secondary"
        variant="outlined"
      />

      <div className="col-md-2 col-sm-4 mt-4">
        Synopsis Approval Notification :
      </div>
      <input
        className=" form-control-sm  col-md-10 col-sm-8"
        type="file"
        min={0}
        name="tutionFeePaid"
        // value={saveModal.tutionFeePaid}
        // onChange={this.changeHandler}
      />
      <div className="col-md-2 col-sm-4 mt-4">Thesis Presentation :</div>
      <input
        className=" form-control-sm  col-md-10 col-sm-8"
        type="file"
        min={0}
        name="tutionFeePaid"
        // value={saveModal.tutionFeePaid}
        // onChange={this.changeHandler}
      />
      <Button
        type="submit"
        sx={{ ml: "18%" }}
        variant="contained"
        size="large"
        color="secondary"
      >
        Submit
      </Button>
    </Box>
  );
}
