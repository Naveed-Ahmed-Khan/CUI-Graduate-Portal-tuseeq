import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { userRole: "LOGIN", userProgram: "" },

  reducers: {
    setUser: (state, action) => {
      state.userRole = action.payload;
    },
    setUserProgram: (state, action) => {
      state.userProgram = action.payload;
    },
  },
});

export const { setUser, setUserProgram } = userSlice.actions;

export default userSlice.reducer;
