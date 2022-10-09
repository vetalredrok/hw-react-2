import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {authService} from "../../../services";


const initialState = {
    userInfo: {},
    userToken: null,
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
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                console.log(state.error)
            })
    }
});

const {reducer: userReducer} = userSlice;

const userActions = {
    registerUser
}



export {userReducer, userActions};
