import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import checkReducer from "./checkLogin";
import themeReducer from "./themeSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    checkUserLogin: checkReducer,
    theme: themeReducer,
  },
});
export default appStore;
