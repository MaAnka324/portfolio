import React from 'react';
import style from './Project.module.css';

type ProjectType = {
    project: string
    text: string
    href: string
    hrefName: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <a className={style.href} href={props.href}>{props.hrefName}</a>
            </div>
            <h3>{props.project}</h3>
            <span className={style.description}>{props.text}</span>

        </div>
    );
};

export default Project;