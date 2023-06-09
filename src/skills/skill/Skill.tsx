import React from 'react';
import style from './Skill.module.css'

type SkillType = {
    skill: string
    img: string
    // text: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={style.skill}>

                <img className={style.icon} src={props.img}/>

            <h3 >{props.skill}</h3>
            {/*<span className={style.description}>{props.text}</span>*/}
        </div>
    );
};

export default Skill;