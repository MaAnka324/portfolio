import React from 'react';
import style from './Input.module.css'

const Input = () => {
    return (
        <div>
            <form action="/submit" method="POST">
                <label htmlFor="GET-name">Name:</label>
                <input className={style.input} id="GET-name" type="text" name="name" required/>
                <label htmlFor="email">Email:</label>
                <input className={style.input} id="email" type="email" name="email" required/>
                <label htmlFor="message">Message:</label>
                <textarea className={style.input} id="message" name="message" required></textarea>
                <input className={style.button} type="submit" value="Save"/>
            </form>
        </div>
    );
};

export default Input;