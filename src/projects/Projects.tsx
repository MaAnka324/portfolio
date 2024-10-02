import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";
import socialNetwork from "../../src/projects/project/img/social_network.png";
import new_job from "../../src/projects/project/img/new.png";



const Projects = () => {
    return (
        <div id='projects' className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h1 className={style.title}>PROJECTS</h1>
                <div className={style.projects}>
                    <Project
                        project={'TodoList'}
                        text={'Stack: TypeScript, React, Redux-thunk,\n' +
                            'Router-dom, Axios, Mui, Formik, Storybook\n'}
                        href={'https://maanka324.github.io/TODO_LIST/'}
                        hrefName={'go to view'}
                        img='https://cdn-icons-png.flaticon.com/512/1440/1440998.png'
                    />
                    <Project
                        project={'Social Network'}
                        text={'Stack: TypeScript, React, Redux, Redux-Thunk, ReactRouter-dom, Axios, Redux Form\n'}
                        href={'https://github.com/MaAnka324/samurai-way'}
                        hrefName={'go to view'}
                        img={socialNetwork}
                    />
                    <Project
                        project={'SIGN UP'}
                        text={'Stack: TypeScript, React, Redux, Redux-Thunk, ReactRouter-dom, Axios, Formik'}
                        href={'https://github.com/MaAnka324/abz'}
                        hrefName={'go to view'}
                        img={new_job}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;