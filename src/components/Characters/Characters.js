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
        <div className='Characters-Container'>
            <h1>All characters in Harry Potter:</h1>
            <div className='Character-Cards-Container'>
                {data.map( (character, index) => {
                    if(character.wand.core === '') {
                        character.wand.core = ('?');
                    }
                    if(character.wand.wood === '') {
                        character.wand.wood = ('?');
                    }
                    if(character.patronus === '') {
                        character.patronus = ('?');
                    }
                    if(character.wand.length === ''){
                        character.wand.length = ('?');
                    }
                    // check is alive
                    if(character.alive === false) {
                        character.alive = 'Dead';
                    }
                    else if(character.alive === true) {
                        character.alive = 'Alive';
                    }
                    return (
                        <div key={index} className='Character-Card'>
                            <img src={character.image} alt={character.image}/>
                            <div className='Character-Data'>
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
                            <div className='Character-Data-Back-Container'>
                                <div className='Character-Data-Back'>
                                    <div>
                                        date of birth: <b>{character.dateOfBirth}</b>
                                    </div>
                                    <div>
                                        ancestry: <b>{character.ancestry} ({character.species}) </b>
                                    </div>
                                    <div>
                                        wand <br/>
                                        wood:  <b>{character.wand.wood}</b> <br/>
                                        core: <b>{character.wand.core} </b> <br/>
                                        length: <b>{character.wand.length} cm</b>
                                        
                                    </div>
                                    <div>
                                        patronus: <b>{character.patronus}</b>
                                    </div>
                                    <div>
                                        played by: <b>{character.actor}</b>
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