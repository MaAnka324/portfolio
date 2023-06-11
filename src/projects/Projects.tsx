import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";



const Projects = () => {
    return (
        <div id='projects' className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h1 className={style.title}>Projects</h1>
                <div className={style.projects}>
                    <Project
                        project={'TodoList'}
                        text={'The TodoList project is a commonly implemented project that demonstrates the creation of a simple web application for managing a list of tasks or to-do items.'}
                        text2={'Functionality of a TodoList project: Task List display, add new tasks, remove tasks, mark tasks as completed, filtering and sorting '}
                        href={'https://maanka324.github.io/TODO_LIST/'}
                        hrefName={'go to view'}
                        img='https://cdn-icons-png.flaticon.com/512/1440/1440998.png'
                    />
                    <Project
                        project={'Counter'}
                        text={'The Counter project is a simple web application that allows users to increment a number based on predefined settings.'}
                        text2={'Functionality of a Counter project: number display, settings, incrementing the number, reset or clear functionality, disabling buttons'}
                        href={'https://maanka324.github.io/counter/'}
                        hrefName={'go to view'}
                        img='https://cdn-icons-png.flaticon.com/512/6357/6357834.png'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;