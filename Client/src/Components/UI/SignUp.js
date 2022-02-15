import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setUserProgram } from "../../Store/user";
import DialogueSelect from "./RegiNumberDialog";
import { Signup } from "../../Store/authSlice";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [regNumber, setRegNumber] = React.useState({
    session: "--",
    year: "--",
    discipline: "--",
    rollNo: "--",
  });

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const regNo = `${regNumber.session}${regNumber.year}-${regNumber.discipline}-${regNumber.rollNo}`;
  const mail = `${regNo}@student.comsats.edu.pk`;
  const isbMail = `${regNo}@isbstudent.comsats.edu.pk`;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const program = data.get("Program");

    dispatch(
      Signup({
        registrationNo: regNo,
        username: data.get("Name"),
        fatherName: data.get("Father'sName"),
        mobile: data.get("Mobile"),
        email: email,
        program: data.get("Program"),
        userRole: "STUDENT",
        password: "dummy",
      })
    )
      // .unwrap()
      .then((res) => {
        console.log(res);
        dispatch(setUserProgram(program));

        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log({
      registrationNo: regNo,
      username: data.get("Name"),
      fatherName: data.get("Father'sName"),
      mobile: data.get("Mobile"),
      email: email,
      program: data.get("Program"),
    });

    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img
            style={{
              width: "250px",
              margin: "0 0 20px 180px",
            }}
            alt="Remy Sharp"
            src="../assets/images/cui.png"
          />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item sx={{ mb: [1] }} md={12} xs={12}>
                <DialogueSelect
                  onRegNum={setRegNumber}
                  /* onProgram={props.onProgram} */
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Program"
                    name="Program"
                    //value={Program}
                    label="Program"
                    //onChange={handleChange}
                  >
                    <MenuItem value={"PhD"}>PhD</MenuItem>
                    <MenuItem value={"MS"}>MS</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="Name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Father'sName"
                  label="Father's Name"
                  name="Father'sName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid Grid item md={12} xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <Select
                    /* disabled */
                    labelId="demo-simple-select-label"
                    id="Email"
                    name="Email"
                    /*  defaultValue={mail} */
                    value={email}
                    onChange={handleChange}
                    label="Email"
                  >
                    <MenuItem value={mail}>{mail}</MenuItem>
                    <MenuItem value={isbMail}>{isbMail}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Mobile"
                  label="Mobile"
                  id="Mobile"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  
                  value={String(regNumber)}
                  fullWidth
                  id="EmailAddress"
                  placeholder={`${regNumber.program}${regNumber.session}-${regNumber.discipline}-${regNumber.rollNo}`}
                  label="E-Mail"
                  name="EmailAddress"
                  autoComplete="email"
                />
              </Grid> */}
              {/* <Grid container sx={{ marginLeft: "16px" }} md={12} xs={12}> */}
              {/* <FormControl fullWidth>
                  <InputLabel placeholder="SP/FA" id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="session"
                    name="session"
                    variant="outlined"
                    //value={Program}
                    label="Category"

                    //onChange={handleChange}
                  >
                    <MenuItem value={"PhD"}>PhD</MenuItem>
                    <MenuItem value={"MS"}>MS</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}

              {/* <Grid container className="input">
                <Grid item md={12} xs={12}>
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{ fontSize: "16px", color: "rgb(102,102,102)" }}
                  >
                    Registration Number *
                  </Typography>
                </Grid>

                <Grid item md={3} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel
                      placeholder="SP/FA"
                      id="demo-simple-select-label"
                    ></InputLabel>
                    <Select
                      defaultValue="SP/FA"
                      labelId="demo-simple-select-label"
                      id="session"
                      name="session"
                      variant="standard"
                      //value={Program}
                      label=""

                      //onChange={handleChange}
                    >
                      <MenuItem disabled value={"SP/FA"}>
                        N/A
                      </MenuItem>
                      <MenuItem value={"SP"}>SP</MenuItem>
                      <MenuItem value={"FA"}>FA</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid Grid item md={3} xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="sessionNumber"
                    required
                    variant="standard"
                    fullWidth
                    placeholder="00"
                    id="sessionNumber"
                    label=""
                    autoFocus
                  />
                </Grid>
                <Grid Grid item md={3} xs={12}>
                  <FormControl fullWidth color="primary">
                    <Select
                      defaultValue="Program"
                      labelId="demo-simple-select-label"
                      id="Program"
                      name="Program"
                      variant="standard"
                      //value={Program}
                      label=""
                      placeholder="Program"
                      //onChange={handleChange}
                    >
                      <MenuItem disabled value={"Program"}>
                        N/A
                      </MenuItem>
                      <MenuItem value={"CS"}>CS</MenuItem>
                      <MenuItem value={"SE"}> SE</MenuItem>
                      <MenuItem value={"IS"}> IS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid Grid item md={3} xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="RegistrationNumber"
                    required
                    placeholder="000"
                    variant="standard"
                    fullWidth
                    id="RegistrationNumber"
                    label=""
                    autoFocus
                  />
                </Grid>
              </Grid> */}

              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="CurrentSemester"
                  label="Current Semester"
                  id="CurrentSemester"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">Program</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Program"
                    name="Program"
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
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Course Work Completion
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="CourseWorkCompletion"
                    name="CourseWorkCompletion"
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
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="CoursesPassed"
                  label="Courses Passed"
                  id="CoursesPassed"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Supervisor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Supervisor"
                    name="Supervisor"
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
                    <MenuItem value="281">
                      Dr. Muhammad Manzoor ilahi Tamimy
                    </MenuItem>
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
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Co-Supervisor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="Co-Supervisor"
                    name="Co-Supervisor"
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
                    <MenuItem value="281">
                      Dr. Muhammad Manzoor ilahi Tamimy
                    </MenuItem>
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
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Synopsis/ThesisTitle"
                  label="Synopsis/Thesis Title"
                  id="Synopsis/ThesisTitle"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth color="secondary">
                  <InputLabel id="demo-simple-select-label">
                    Synopsis Track
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="SynopsisTrack"
                    //value={Program}
                    label="Synopsis Track"
                    //onChange={handleChange}
                  >
                    <MenuItem value={12}>N/A</MenuItem>
                    <MenuItem value={14}>Regular</MenuItem>
                    <MenuItem value={15}>By Publication</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="AreaofSpecialization"
                  label="Area of Specialization"
                  id="AreaofSpecialization"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Date"
                  label="Date of Commence of MS/PhD
                  (MM/DD/YYYY)"
                  id="Date"
                  autoComplete="new-password"
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {console.log(regNumber)}
      </Container>
    </ThemeProvider>
  );
}
