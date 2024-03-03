import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk(
    "user/signUp",
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            fetch("http://localhost:3000/users/signup", {
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
