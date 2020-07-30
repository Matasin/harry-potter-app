import React, { useEffect, useState } from 'react';
import './Students.css';

const Students = ( {URL} ) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(URL + `/students`)
            .then(response => response.json())
            .then(data => setData(data))
    }, [URL]); 

    return (
        <div className='Students-Container'>
            <h1>Students in Harry Potter</h1>
            <div className='Students-Cards-Container'>
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
                        <div key={index} className='Students-Card'>
                            <img src={character.image} alt={character.image}/>
                            <div className='Students-Data'>
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
                            <div className='Students-Data-Back-Container'>
                                <div className='Students-Data-Back'>
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
export default Students