import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser } from "../Slices/userSlice";

export const login = createAsyncThunk(
    "user/signUp",
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    dispatch(setUser(res.user));
                    return res.user;
                });
        } catch (error) {
            console.log(error.message);
        }
    }
);
