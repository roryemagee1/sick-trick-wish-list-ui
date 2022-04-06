import React from 'react';
import Card from './Card.js';
import './Tricks.css';

const Tricks = ({tricks}) => {
    let output = <Card tricks={tricks}/>;

    return (
        <div className="tricks">
            {output}
            {output}
            {output}
        </div>
    )
}

export default Tricks;