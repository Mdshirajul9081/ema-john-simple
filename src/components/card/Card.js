import React from 'react';

const Card = ({card}) => {
    return (
        <div>
             <h2>order summary</h2>
             <p>selected item:{card.length}</p>
           
        </div>
    );
};

export default Card;