import React from 'react';
import './Card.css'

const Card = ({card}) => {
    return (
        <div className='card'>
             <h2>order summary</h2>
             <p>selected item:{card.length}</p>
           
        </div>
    );
};

export default Card;