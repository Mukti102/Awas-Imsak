import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter-slice";
import { Login } from "./features/Authentication";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Login,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
