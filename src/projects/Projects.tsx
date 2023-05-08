import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";



const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project
                        project={'TodoList'}
                        text={'asdfghjkl;asdfghjhsdgvje dfvbfehgfvefkuw asdfghjkl;asdfghjhsdgvje dfvbfehgfvefkuw'}
                        href={'https://maanka324.github.io/TODO_LIST/'}
                        hrefName={'Смотреть'}
                    />
                    <Project
                        project={'Counter'}
                        text={'Hello;asdfghjhsdgvje dfvbfehgfvefkuw asdfghjkl;asdfghjhsdgvje dfvbfehgfvefkuw'}
                        href={'https://maanka324.github.io/counter/'}
                        hrefName={'Смотреть'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;