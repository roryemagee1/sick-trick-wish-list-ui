import React from 'react';
import './Card.css';

const Card = ({tricks}) => {
    let cards = tricks.map(trick => {
        return (
            <div className="card">
                <p> {`${trick.stance} ${trick.name}`} </p>
                <p> {`Obstacle: ${trick.obstacle}`} </p>
                <p> Link to Tutorial: </p>
                <a href={trick.tutorial}>{trick.tutorial}</a>
            </div>
        )
    })

    return (
        <div className="tricks">
            {cards}
        </div>
    )
}

export default Card;