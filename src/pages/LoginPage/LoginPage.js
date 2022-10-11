import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {userActions} from "../../redux";

const LoginPage = () => {

    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();
    const {loading, error, userInfo} = useSelector(state => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if(userInfo){
            navigate('/cars')
            console.log(userInfo);
        }
    }, [userInfo])



    const submitForm = (data) =>{
        console.log(data);
        dispatch(userActions.loginUser(data));

    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            {error && <p>Error - {error?.username}</p>}
            {loading && <p>Loading.....</p>}
            <input type='text' placeholder={'username'} {...register('username')} required/>
            <input type='text' placeholder={'password'} {...register('password')} required/>
            <button>Login</button>
        </form>
    );
};

export {LoginPage};