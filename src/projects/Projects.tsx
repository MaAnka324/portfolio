import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";



const Projects = () => {
    return (
        <div id='projects' className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project
                        project={'TodoList'}
                        text={'The TodoList project is a commonly implemented project that demonstrates the creation of a simple web application for managing a list of tasks or to-do items. It allows users to add, remove, and mark tasks as completed.'}
                        text2={'Functionality of a TodoList project: Task List display, add new tasks, remove tasks, mark tasks as completed, filtering and sorting '}
                        href={'https://maanka324.github.io/TODO_LIST/'}
                        hrefName={'Смотреть'}
                    />
                    <Project
                        project={'Counter'}
                        text={'The Counter project is a simple web application that allows users to increment a number based on predefined settings. It also includes the functionality to disable buttons based on certain conditions.'}
                        text2={'Functionality of a Counter project: number display, settings, incrementing the number, reset or clear functionality, disabling buttons'}
                        href={'https://maanka324.github.io/counter/'}
                        hrefName={'Смотреть'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;