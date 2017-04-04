import React, { Component } from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} />
            <h1>{props.name}</h1>
            <ul>
                <li>Phone: {props.contacts.phone}</li>
                <li>Email: {props.contacts.email}</li>
            </ul>
        </div>
    );
}

export default Card;