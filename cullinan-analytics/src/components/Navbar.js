// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Feed</Link></li>
                <li><Link to="/top-users">Top Users</Link></li>
                <li><Link to="/trending-posts">Trending Posts</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;