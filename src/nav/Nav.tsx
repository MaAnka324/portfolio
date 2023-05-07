import React from 'react';
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">home</a>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contacts</a>
        </div>
    );
}

export default Nav;
