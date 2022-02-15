import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
/* import Link from "@mui/material/Link"; */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
/* import Link from "react-router-dom" */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/user";
import { Login } from "../../Store/authSlice";

/* function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
} */

const theme = createTheme();

export default function SignIn() {
  /* const user = useSelector((state) => state.changeUser); */
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-console

    /* const password = data.get("password"); */
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    dispatch(Login({ userEmail, userPassword }))
      // .unwrap()
      .then((res) => {
        /* console.log(res); */
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
    /* axios
      .post("http://localhost:3000/auth/login", {
        email: userEmail,
        password: userPassword,
      })
      .then((res) => {
        const userRole = res.data.user.userRole[0].role;
        dispatch(setUser(userRole));
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      }); */

    /* if (email === "admin") {
      props.onLogin("GAC");
      navigate("/Dashboard");
    } */
    /* if (email === "gac") {
      props.onLogIn("GAC");
    }
    if (email === "go") {
      props.onLogIn("GO");
    }
    if (email === "ms") {
      props.onLogIn("MS_COR");
    }
    if (email === "phd") {
      props.onLogIn("PHD_COR");
    }
    if (email === "stud") {
      props.onLogIn("STUD");
    } */
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
