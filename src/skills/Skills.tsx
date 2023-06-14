import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h1 className={style.title}>SKILLS</h1>
                <div className={style.skills}>
                    <Skill skill={'HTML'}  img='https://cdn-icons-png.flaticon.com/512/732/732212.png'/>
                    <Skill skill={'CSS'} img='https://cdn-icons-png.flaticon.com/512/732/732190.png'/>
                    <Skill skill={'JS'} img='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'/>
                    <Skill skill={'React'} img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'/>
                    <Skill skill={'Redux'} img='https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;