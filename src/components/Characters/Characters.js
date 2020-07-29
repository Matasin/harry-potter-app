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
                    return (
                        <div 
                            key={index}
                            className='CharacterCard'
                        >
                            <img src={character.image} alt={character.image}/>
                            <div className='CharacterData'>
                                <div>
                                    Name: <b>{character.name}</b>
                                </div>
                                <div>
                                    Species: <b>{character.species}</b>
                                </div>
                                <div>
                                    House: <b>{character.house}</b>
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