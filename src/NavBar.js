import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div className='nav-container-left'>
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/Grades" className='nav-item'>Math</Link>
            </div>
            <div className='nav-container-right'>
                <Link to="/Login" className='nav-item'>Login</Link>
            </div>
        </nav>
    );
}

export default NavBar;