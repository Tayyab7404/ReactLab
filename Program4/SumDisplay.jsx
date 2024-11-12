import React from 'react';

const SumDisplay = ({ num1, num2 }) => {
    const sum = num1 + num2;
    return (
        <div>
            <h2>Sum: {sum}</h2>
        </div>
    );
};

export default SumDisplay;