import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../../services";

const getCars = createAsyncThunk(
    'cars/getCars',
    async (_, {rejectWithValue}) => {
        try {
            const response = await carService.getAll()
            console.log(response);
            const data = response.data;
            console.log(data);
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    });

const addCar = createAsyncThunk(
    'cars/addCar',
    async (data, {rejectWithValue}) =>{
        try {
            await carService.create(data);
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }

)

const initialState = {
    cars: [],
    loading: false,
    error: null,
    success: false
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCars.fulfilled, (state, action)=>{
                state.cars = action.payload.data;
                console.log(state.cars)
                state.loading = false;
            })
            .addCase(getCars.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(addCar.fulfilled, (state, action) => {
                state.success = true;
            })
    }
    });

const {reducer: carReducer} = carSlice;

const carActions = {
    getCars,
    addCar
}

export {carReducer, carActions}