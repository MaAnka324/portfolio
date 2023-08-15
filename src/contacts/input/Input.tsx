import React from 'react';
import style from './Input.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Input = () => {
    return (

        <form action="/submit" method="POST">
            <div className={style.container}>
                {/*<label htmlFor="GET-name">Name:</label>*/}
                {/*<input className={style.input} id="GET-name" type="text" name="name" required/>*/}
                <div>
                    <TextField
                        className={style.input}
                        id="GET-name"
                        label="Name"
                        multiline
                        maxRows={2}
                        required
                    />
                </div>
                <div>
                    <TextField
                        className={style.input}
                        id="email"
                        label="Email"
                        multiline
                        maxRows={2}
                        required
                    />
                </div>
                <div>
                    <TextField
                        className={style.input}
                        name="message"
                        id="message"
                        label="Message"
                        multiline
                        rows={5}
                    />
                </div>
                <div>
                    <Button variant="outlined" type="submit">Send</Button>
                    {/*<input className={style.button} type="submit" value="Save"/>*/}

                </div>
            </div>
        </form>
    );
};

export default Input;