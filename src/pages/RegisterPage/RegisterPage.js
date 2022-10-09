import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";

const RegisterPage = () => {

    const dispatch = useDispatch();

    const {loading, error} = useSelector(state => state.userReducer);


    const {handleSubmit, register} = useForm();

    const submitForm = (data) =>{
        console.log(data);
        dispatch(userActions.registerUser(data));
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <p>Error - {error?.username}</p>}
            <input type='text' placeholder={'username'} {...register('username')} required/>
            <input type='text' placeholder={'password'} {...register('password')} required/>
            <button type='submit'>Register</button>
        </form>
    );
};

export {RegisterPage};