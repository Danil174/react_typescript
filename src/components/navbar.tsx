import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
    <nav>
        <div className="nav-wrapper purple darken-2 px1">
        <NavLink to="/" className="brand-logo">React + typescript</NavLink>
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Список дел</NavLink></li>
            <li><NavLink to="/about">Информация</NavLink></li>
        </ul>
        </div>
    </nav>
    );
}