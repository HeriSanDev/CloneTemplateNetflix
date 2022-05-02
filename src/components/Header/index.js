/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './style.css';

export default ({black}) =>{

    return (
        <header className={black?'black':''}>
           <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="CloneNetFlix"/>
                </a>
           </div>
           <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario"/>
                </a>
           </div>
        </header>
    );

}