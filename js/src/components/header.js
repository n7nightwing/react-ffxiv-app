import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className="header">
            <ul>
                <li>
                <Link to='/about'>
                <img alt="about" src={props.avatar} />
                </Link>
                </li>
                <li>
                    <Link to='/'>FFXIV App</Link>
                </li>
                <li>
                    <p>{props.charName}</p>
                </li>
            </ul>
        </div>
    )
}

export default Header;