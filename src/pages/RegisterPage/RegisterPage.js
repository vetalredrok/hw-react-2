import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {userActions} from "../../redux";


const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {loading, error, success} = useSelector(state => state.userReducer);

    const {handleSubmit, register} = useForm();

    useEffect(() => {
        if(success){
            navigate('/login')
        }
    }, [success])

    const submitForm = (data) =>{
        console.log(data);
        dispatch(userActions.registerUser(data));
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <p>Error - {error?.username}</p>}
            {loading && <p>Loading.....</p>}
            <input type='text' placeholder={'username'} {...register('username')} required/>
            <input type='text' placeholder={'password'} {...register('password')} required/>
            <button type='submit'>Register</button>
        </form>
    );
};

export {RegisterPage};