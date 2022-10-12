import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";


const Cars = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state.carReducer);
    const {cars, loading, error} = selector;

    useEffect(() => {
        dispatch(carActions.getCars());
        console.log(cars);
    }, [cars])
    return (
        <div>
            {
                loading && <h3>Loading process....</h3>
            }
            {
                error && <h3>Error dropped!</h3>
            }
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};