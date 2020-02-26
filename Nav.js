import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/about'>
                <li>Tab1</li>
                </Link>
                <Link style={navStyle}to='/shop'>
                <li>Tab2</li>
                </Link>
                <Link style={navStyle}to='/tab3'>
                <li>Tab3</li>
                </Link>
                </ul>
                
                
    
        </nav>
    );
}


export default Nav;
