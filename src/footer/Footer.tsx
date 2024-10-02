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
                        <img className={style.codewars} src='https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/224027/cw-512-12b281b9-f8a8-4512-9050-dcc2a2c7bb89.png'/>
                    </a>
                </div>
            </div>
            <div>© 2024 all rights reserved</div>
        </div>
    );
};
//
export default Footer;