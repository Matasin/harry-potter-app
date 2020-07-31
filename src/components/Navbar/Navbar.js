import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='NavbarContainer'>
            <nav className='Navbar'>
                <div className='NavbarItemsContainer'>
                    {arrayOfNavItems.map( (item, index) => {
                        return (
                                <Link  
                                    to={`/${item}`}
                                    key={index}
                                    className='NavbarItem'
                                >   
                                    {item}
                                </Link >
                            )
                    })}
                </div>
            </nav>
        </div>
    )
}
const arrayOfNavItems = [
    'characters',
    'students',
    'staff',
    'house'
];
export default Navbar
