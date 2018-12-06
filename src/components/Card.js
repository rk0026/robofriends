import React from 'react';

function alerttion(id) {
    // event.preventDefault();
    // console.warn(id);
}

const Card = ({ name, email, id }) => (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s">
        <button className="bg-light-green" type="button" onClick={alerttion(id)}>
            <h1>myfriend</h1>
            <img alt="robots" src={`https://robohash.org/${id}?set=set4`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </button>
    </div>
);
// src={`https://robohash.org/${id}?200*200`} >> ES6 expression
export default Card;
