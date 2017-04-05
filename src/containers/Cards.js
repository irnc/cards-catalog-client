import React from 'react';
import Card from "../components/Card";


function Cards(props) {
    return (
        <div className="cards">
            {
                props.cards.map ((card) => {
                return <Card name={card.name} contacts={card.contacts} />
                })
        }
        </div>
    );
}

export default Cards;