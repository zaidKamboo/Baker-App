import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import loginSlice from "./Slices/loginSlice";

const AppStore = configureStore({
    reducer: {
        user: userSlice.reducer,
        login: loginSlice.reducer,
    },
});

export default AppStore;
