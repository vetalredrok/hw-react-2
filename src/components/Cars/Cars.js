import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";


const Cars = ({cars}) => {

    const selector = useSelector(state => state.carReducer);
    const {loading, error} = selector;

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