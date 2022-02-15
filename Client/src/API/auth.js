import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/",
});

const login = async (userEmail, userPassword) => {
  console.log("api" + userEmail, userPassword);
  try {
    const res = await API.post("auth/login", {
      email: userEmail,
      password: userPassword,
    });
    if (res) {
      console.log("Api " + res);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const signup = async (
  registrationNo,
  username,
  fatherName,
  mobile,
  email,
  program,
  userRole,
  password
) => {
  console.log(
    "api" + registrationNo,
    username,
    fatherName,
    mobile,
    email,
    password,
    userRole,
    program
  );
  try {
    const res = await API.post("auth/signup", {
      registrationNo,
      username,
      fatherName,
      mobile,
      email,
      program,
      userRole,
      password,
    });
    if (res) {
      console.log("Api " + res);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  login,
  signup,
};
export default authService;
