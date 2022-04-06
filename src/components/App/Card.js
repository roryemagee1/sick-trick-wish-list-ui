import React from 'react';
import './Card.css';

const Card = ({tricks}) => {
    let card = (
        <div className="card">
            <p> {`${tricks[0].stance} ${tricks[0].name}`} </p>
            <p> {`Obstacle: ${tricks[0].obstacle}`} </p>
            <p> Link to Tutorial: </p>
            <a href={tricks[0].tutorial}>{tricks[0].tutorial}</a>
        </div>
    )

    return (
        <div>
            {card}
        </div>
    )
}

export default Card;