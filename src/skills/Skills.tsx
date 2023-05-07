import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>skills</h2>
                <div className={style.skills}>
                    <Skill skill={'HTML'} text={'bla bla'}/>
                    <Skill skill={'CSS'} text={'bla bla'}/>
                    <Skill skill={'React'} text={'bla bla bla bla bla bla bla bla bla bla '}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;