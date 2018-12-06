import React from 'react';

const Card = ({ name, email, id }) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s">
        <h1>robofriend</h1>
        <img alt="robots" src={`https://robohash.org/${id}?200*200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);
// src={`https://robohash.org/${id}?200*200`} >> ES6 expression
export default Card;
