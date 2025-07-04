import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import checkReducer from "./checkLogin";
import themeReducer from "./themeSlice";
import appReducer   from "./appSlice";
import searchReducer from "./searchSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    checkUserLogin: checkReducer,
    theme: themeReducer,
    app:appReducer,
    search:searchReducer,
  },
});
export default appStore;
