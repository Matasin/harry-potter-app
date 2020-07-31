import React, { useEffect, useState } from 'react';
import './House.css';
import { CSSTransition } from 'react-transition-group'

const arrayOfHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin',
]

const House = ( {URL} ) => {

    const [data, setData] = useState([]);
    const [targetFetching, setTargetFetching] = useState('gryffindor');
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        fetch(URL + `/house/${targetFetching}` ) // + somethin who defineuser
            .then(response => response.json())
            .then(data => setData(data))
    }, [URL,targetFetching]); 

    const switchMenu = () => {
        setVisibility(!visibility)
    }

    return (
        <div className='House-Container'>
            <h1>
                characters from 
                <p id='characters-from'>{targetFetching}</p>
            </h1>
            <div className='Menu-Container'>
                <button 
                    className='Menu-Button'
                    onClick={switchMenu}
                >
                    Show all houses
                </button>
                <CSSTransition
                    in = { visibility }
                    appear = {visibility}
                    timeout = {300}
                    classNames = 'list'
                    unmountOnExit
                >
                    <div className='Menu-List'>
                        {arrayOfHouses.map( (house, index) => {
                            return (
                                <li 
                                    key={index}
                                    className='Menu-Item'
                                    onClick= { () => setTargetFetching(house)}
                                > 
                                    {house} 
                                </li>
                            )
                        })}
                    </div>
                </CSSTransition>
            </div>
            <div className='House-Cards-Container'>
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
                        <div key={index} className='House-Card'>
                            <img src={character.image} alt={character.image}/>
                            <div className='House-Data'>
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
                            <div className='House-Data-Back-Container'>
                                <div className='House-Data-Back'>
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
export default House