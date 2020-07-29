import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='NavbarContainer'>
            <nav className='Navbar'>
                <div className='NavbarItemsContainer'>
                    {arrayOfNavItems.map( (item, index) => {
                        // if(item === 'home page'){
                        //     return (
                        //         <Link to='/' className='NavbarItem' key={index}>
                        //             <li>
                        //                 {NavItem}
                        //             </li>
                        //         </Link>
                        //     )
                        // }
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
    'houses'
];
export default Navbar
