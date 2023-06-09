import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import photo from '../img/my_photo.jpg'

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    {/*<span>Hi there</span>*/}
                    <h1>Anna Matviichuk</h1>
                    <p>Frontend developer</p>
                </div>

                    <img className={style.photo} src={photo}/>

            </div>
        </div>
    );
}

export default Main;