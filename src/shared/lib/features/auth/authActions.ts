import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface SignupUserArgs {
    email: string;
    password: string;
    userName: string;
}

interface SignupUserError {
    message: string;
}

const backendURL = 'https://131c-139-59-208-177.ngrok-free.app';

export const signupUser = createAsyncThunk<void, SignupUserArgs, { rejectValue: SignupUserError }>(
    'auth/signup',
    async ({ email, password, userName }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post(
                `${backendURL}/users/sign_up`,
                { email, password, userName },
                config
            )
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.data.message) {
                return rejectWithValue({ message: error.response.data.message });
            } else if (error instanceof Error) {
                return rejectWithValue({ message: error.message });
            } else {
                return rejectWithValue({ message: 'An unknown error occurred' });
            }
        }
    }
)