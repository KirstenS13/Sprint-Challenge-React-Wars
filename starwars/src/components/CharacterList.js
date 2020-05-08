import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Character from './Character';

const CharacterContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`

export default function CharacterList(){
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people/')
        .then(response => {
          console.log(response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);

    return (
        <div className='character'>
            <CharacterContainer>
                {characters.map(character => {
                    return (
                        <Character
                            name={character.name}
                            birth_year={character.birth_year}
                            eye_color={character.eye_color}
                            hair_color={character.hair_color}
                            gender={character.gender}
                            height={character.height}
                            mass={character.mass}
                            skin_color={character.skin_color}
                        />
                    );
                })}
            </CharacterContainer>
        </div>
    );
}