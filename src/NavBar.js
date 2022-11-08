import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-container'>
            <ul className='nav'>
                <li className='nav-item-container'>
                    <Link to="/" className='nav-item'>Home</Link>
                </li>
                <li className='nav-item-container'>
                    <Link to="/Grades" className='nav-item'>Grades</Link>
                </li>
                <li className='nav-item-container'>
                    <Link to="/Login" className='nav-item'>Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;