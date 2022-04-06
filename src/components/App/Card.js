import React from 'react';
import './Card.css';

const Card = () => {
    let card = (
        <div className="card">
            <p> Trick </p>
            <p> Obstacle: </p>
            <p> Link to Tutorial: </p>
            <a href="https://www.google.com">google.com</a>
        </div>
    )

    return (
        <div>
            {card}
        </div>
    )
}

export default Card;