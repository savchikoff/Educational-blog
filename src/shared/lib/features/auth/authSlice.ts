import { createSlice } from "@reduxjs/toolkit";
import { signupUser } from "./authActions";

interface AuthState {
    loading: boolean;
    userInfo: { [key: string]: any } | null;
    userToken: string | null;
    error: string | null;
    success: boolean;
    isVerified: boolean;
}

const initialState: AuthState = {
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
    isVerified: false,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signupUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(signupUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
        }).addCase(signupUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = "An unknown error occured";
        })
    }
});

const authReducer = authSlice.reducer;

export { authReducer }