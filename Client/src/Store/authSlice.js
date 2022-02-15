import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../API/auth";

const user = JSON.parse(localStorage.getItem("user"));

export const Login = createAsyncThunk(
  "auth/Login",
  async ({ userEmail, userPassword }, thunkAPI) => {
    console.log(userEmail, userPassword);
    try {
      var res = await authService.login(userEmail, userPassword);
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const Signup = createAsyncThunk(
  "auth/Signup",
  async (
    {
      registrationNo,
      username,
      fatherName,
      mobile,
      email,
      program,
      userRole,
      password,
    },
    thunkAPI
  ) => {
    console.log(
      registrationNo,
      username,
      fatherName,
      mobile,
      email,
      userRole,
      program,
      password
    );
    try {
      var res = await authService.signup(
        registrationNo,
        username,
        fatherName,
        mobile,
        email,
        program,
        userRole,
        password
      );
      console.log("thunk" + res);
      return res;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState /* : { isLoggedIn: false, user: null } */,
  extraReducers: {
    [Login.fulfilled]: (state, action) => {
      console.log("full " + action.payload.user);
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [Login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [Signup.fulfilled]: (state, action) => {
      console.log("full " + action.payload.user);
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [Signup.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
export default authSlice.reducer;
