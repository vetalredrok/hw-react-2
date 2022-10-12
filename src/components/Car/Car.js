import React from 'react';

const Car = ({car}) => {
    return (
        <div>
            {
                JSON.stringify(car)
            }
        </div>
    );
};

export {Car};