import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ilogin {
  isLogin: boolean;
  user: null | {};
}

const initialStateLogin: Ilogin = {
  isLogin: false,
  user: null,
};

const login = createSlice({
  name: "login",
  initialState: initialStateLogin,
  reducers: {
    setIsLogin(state) {
      state.isLogin = true;
    },
    setUser(state, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});

export const Login = login.reducer;

export const { setUser } = login.actions;
