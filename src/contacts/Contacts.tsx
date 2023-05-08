import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Input from "./input/Input";

const Contacts = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.inputBlock}>
                    <Input/>
                    <Input/>
                    <textarea className={style.textarea}/>
                </div>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Contacts;