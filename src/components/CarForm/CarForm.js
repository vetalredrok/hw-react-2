import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch();
    const {cars, loading, error, success} = useSelector(state => state.carReducer);

    const submit = (data) => {
        dispatch(carActions.addCar(data));
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input  type="text" placeholder={'Model'} {...register('model')}/>
            <input  type="text" placeholder={'Price'} {...register('price')}/>
            <input  type="text" placeholder={'Year'} {...register('year')}/>
            <button type={'submit'}>Submit</button>
        </form>
    );
};

export {CarForm};