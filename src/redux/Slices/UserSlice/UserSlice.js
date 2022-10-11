import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../../services";

const userToken = authService.getAccessToken()
    ? authService.getAccessToken()
    : null

const userTokenRefresh = authService.getRefreshToken()
    ? authService.getRefreshToken()
    : null


const initialState = {
    userInfo: null,
    userToken: userToken,
    userTokenRefresh: userTokenRefresh,
    loading: false,
    error: null,
    success: false
};


const registerUser = createAsyncThunk(
    'user/register',
    async ({username, password}, {rejectWithValue}) => {
        try {
            await authService.register({username, password});
            console.log('success')

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const loginUser = createAsyncThunk(
    'user/login',
    async ({username, password}, {rejectWithValue}) => {
        try {
           const {data} = await authService.login({username, password});
           await authService.setToken(data);
           console.log(data);
           return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
                console.log(state.error)
            })
            .addCase(loginUser.pending, (state, ) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                state.userToken = action.payload.access;
                state.userTokenRefresh = action.payload.refresh;
                console.log(state.userToken);
                console.log(state.userTokenRefresh);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            })
    }
});

const {reducer: userReducer} = userSlice;

const userActions = {
    registerUser,
    loginUser
}



export {userReducer, userActions};
