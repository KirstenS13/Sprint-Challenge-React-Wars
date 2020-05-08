// Write your Character component here

import React from 'react';

const Character = props => {
    return (
        <li className="character">
            <h2>Name: {props.name}</h2>
            <p>Homeworld: {props.homeworld}}</p>
            <p>Birth Year: {props.birth_year}}</p>
        </li>
    );
};

export default Character;