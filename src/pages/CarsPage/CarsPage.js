import React, { useEffect} from 'react';

import {CarForm, Cars} from "../../components";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";



const CarsPage = () => {

    const selector = useSelector(state => state.carReducer);
    const dispatch = useDispatch();
    const {cars} = selector;


    useEffect(() => {
        dispatch(carActions.getCars());
        console.log(cars);
    }, [])

    return(

        <div>
            <CarForm/>
            <Cars cars={cars}/>
        </div>
    )
}

export {CarsPage};