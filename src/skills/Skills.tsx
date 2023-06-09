import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>skills</h2>
                <div className={style.skills}>
                    <Skill skill={'HTML'} />
                    <Skill skill={'CSS'} />
                    <Skill skill={'JS'} />
                    <Skill skill={'React'} />
                    <Skill skill={'Redux'} />
                </div>
            </div>
        </div>
    );
};

export default Skills;