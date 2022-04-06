import React from 'react';
import Card from './Card.js';
import './Tricks.css';

const Tricks = () => {
    let output = <Card />;

    return (
        <div className="tricks">
            {output}
            {output}
            {output}
        </div>
    )
}

export default Tricks;