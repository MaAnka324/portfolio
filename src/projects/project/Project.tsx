import React from 'react';
import style from './Project.module.css';
import ProjectHref from "../progectHref/ProjectHref";

type ProjectType = {
    project: string
    text: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <div className={style.icon}>

            </div>
            <h3>{props.project}</h3>
            <span className={style.description}>{props.text}</span>

        </div>
    );
};

export default Project;