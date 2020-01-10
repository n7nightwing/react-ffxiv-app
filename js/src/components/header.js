import React from 'react';

function Header(props) {
    return (
        <div className="header">
            <ul>
                <li>
                <img alt="avatar" src={props.avatar} />
                </li>
                <li>
                    <p>FFXIV App</p>
                </li>
                <li>
                    <p>{props.charName}</p>
                </li>
            </ul>
        </div>
    )
}

export default Header;