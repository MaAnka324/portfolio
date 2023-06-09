import React from 'react';
import style from './Project.module.css';

type ProjectType = {
    project: string
    text: string
    text2: string
    href: string
    hrefName: string
    img: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <img className={style.icon} src={props.img}/>
            <div >
                <a className={style.href} href={props.href} target="_blank">{props.hrefName}</a>
            </div>
            <h2>{props.project}</h2>
            <span className={style.description}>{props.text}</span>
            <p></p>
            <span className={style.description}>{props.text2}</span>

        </div>
    );
};

export default Project;