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
                    <Skill skill={'JavaScript'} img='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'/>
                    <Skill skill={'TypeScript'} img='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png'/>
                    <Skill skill={'React'} img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png'/>
                    <Skill skill={'Redux/Redux Toolkit'} img='https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png'/>
                    <Skill skill={'MUI'} img='https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png'/>
                    <Skill skill={'Axios'} img='https://cdn.icon-icons.com/icons2/3911/PNG/512/axios_logo_icon_247516.png'/>
                    <Skill skill={'Storybook'} img='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_storybook_icon_130145.png'/>
                    <Skill skill={'Postman'} img='https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;