import React from 'react';
import {useForm} from "react-hook-form";

const LoginPage = () => {

    const {handleSubmit, register} = useForm();

    const submitForm = (data) =>{
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type='text' placeholder={'username'} {...register('username')} required/>
            <input type='text' placeholder={'password'} {...register('password')} required/>
            <button>Login</button>
        </form>
    );
};

export {LoginPage};