import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import photo from '../img/my_photo.jpg'

type MainTextType = {
    h1: string
}

function MainText(props: MainTextType) {
    return (
        <div>
            <h2 className={style.webDev}>{props.h1}</h2>
        </div>
    )
}

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h1 className={style.h1}>HELLO 🖐 I'M ANNA MATVIICHUK</h1>
                    <MainText h1={'<web developer/>'}/>
                    <h4 className={style.h4}>ReactJs is the main technology that I have been using for my front-end development</h4>
                </div>
                <img className={style.photo} src={photo}/>
            </div>
        </div>
    );
}

export default Main;