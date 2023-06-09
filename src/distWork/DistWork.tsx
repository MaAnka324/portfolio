import React from 'react';
import style from './DistWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

const DistWork = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Considering remote work</h2>
                <a href='#contacts'>Contact me</a>
            </div>

        </div>
    );
};

export default DistWork;