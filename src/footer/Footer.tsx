import React from 'react';
import style from './Footer.module.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className={style.block}>
            <div>
                <h3>Matviichuk Anna</h3>
            </div>
            <div className={style.telegram}>
                <div>
                    <a href='https://t.me/MA_Anka' target="_blank">
                        <TelegramIcon fontSize={"large"} color={"info"}/>
                    </a>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/anna-matviichuk-785a5b267/' target="_blank">
                        <LinkedInIcon fontSize={"large"} color={"info"}/>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/MaAnka324' target="_blank">
                        <GitHubIcon fontSize={"large"} color={"inherit"}/>
                    </a>
                </div>
                <div>
                    <a  href='https://www.codewars.com/users/MaAnka324' target="_blank">
                        <img className={style.codewars} src='https://www.codewars.com/packs/assets/logo.61192cf7.svg'/>
                    </a>
                </div>
            </div>
            <div>© 2023 all rights reserved</div>
        </div>
    );
};
//
export default Footer;