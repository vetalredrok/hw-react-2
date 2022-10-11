import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../../services";


const getCars = createAsyncThunk(
    'cars/getCars',
    async (arg, {getState, rejectWithValue}) => {
        try {

            const {user} = getState()
            const config = {
                headers: {
                    Authorization: `Bearer ${user.userToken}`
                }
            };
            const {data} = carService.getAll(config)

        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    }

    )

const initialState = {

}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase()
    }
    })