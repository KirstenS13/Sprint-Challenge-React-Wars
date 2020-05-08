// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.li`
    list-style-type: none;
    background-color: rgba(255, 255, 255, 0.5);
    width: 40rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem auto;
    border-radius: 5px;
`

const Name = styled.h2`
    font-size: 2rem;
    font-family: 'Lucida Console', Courier, monospace;
    margin: 0.5rem;
`

const InfoParagraph = styled.p`
    font-size: 1rem;
    font-family: 'Lucida Console', Courier, monospace;
    margin: 0.3rem;
`

const Character = props => {
    return (
        <CharacterCard className="character_card" key={props.id}>
            <Name>Name: {props.name}</Name>
            <InfoParagraph>Birth Year: {props.birth_year}</InfoParagraph>
        </CharacterCard>
    );
};

export default Character;