import React from 'react';
import style from './Skill.module.css'

type SkillType = {
    skill: string
    text: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 >{props.skill}</h3>
            <span className={style.description}>{props.text}</span>
        </div>
    );
};

export default Skill;