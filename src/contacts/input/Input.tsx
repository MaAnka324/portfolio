import React from 'react';
import style from './Input.module.css'

const Input = () => {
    return (
        <div>
            <form action="/submit" method="POST">
                <label htmlFor="GET-name">Name:</label>
                <input id="GET-name" type="text" name="name" required/>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <div>
                    <input type="submit" value="Save"/>
                </div>
            </form>
        </div>
    );
};

export default Input;