import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Input from "./input/Input";

const Contacts = () => {
    return (
        <div id='contacts' className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h1 className={style.textContacts}>Contacts</h1>
                <Input/>
            </div>
        </div>
    );
};

export default Contacts;