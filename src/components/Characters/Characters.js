import React, { useEffect, useState } from 'react';
import './Characters.css';

const Characters = ( {URL} ) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setData(data))
    }, [URL]); 

    return (
        <div className='CharactersContainer'>
            <h1>All characters in Harry Potter:</h1>
            <div className='CharacterCardsContainer'>
                {data.map( (character, index) => {
                    if(character.wand.core === '') {
                        character.wand.core = 'Missing data';
                    }
                    if(character.patronus === '') {
                        character.patronus = 'Missing data';
                    } 
                    if(character.alive === false) {
                        character.alive = 'Dead';
                    }
                    else if(character.alive === true) {
                        character.alive = 'Alive';
                    }
                    return (
                        <div key={index} className='CharacterCard'>
                            <img src={character.image} alt={character.image}/>
                            <div className='CharacterData'>
                                <div>
                                    name: <b>{character.name}</b>
                                </div>
                                <div>
                                    species: <b>{character.species}</b>
                                </div>
                                <div>
                                    house: <b>{character.house}</b>
                                </div>
                            </div>
                            <div className='CharacterData-Back-Container'>
                                <div className='CharacterData-Back'>
                                    <div>
                                        date of birth: <b>{character.dateOfBirth}</b>
                                    </div>
                                    <div>
                                        ancestry: <b>{character.ancestry} ({character.species}) </b>
                                    </div>
                                    <div>
                                        wand: <b>{character.wand.wood} {character.wand.core} {character.wand.length}</b>
                                    </div>
                                    <div>
                                        patronus: <b>{character.patronus}</b>
                                    </div>
                                    <div>
                                        Played by: <b>{character.actor}</b>
                                    </div>
                                    <div>
                                        <b>{character.alive}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Characters