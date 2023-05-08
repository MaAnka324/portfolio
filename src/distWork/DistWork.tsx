import React from 'react';
import style from './DistWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

const DistWork = () => {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>text</h2>
                <a href=''>Contact me</a>
            </div>

        </div>
    );
};

export default DistWork;