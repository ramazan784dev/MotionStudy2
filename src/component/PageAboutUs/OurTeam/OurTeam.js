import React from 'react';
import './OurTeam.scss'
import about7 from '../../../img/About1.png'
import about4 from '../../../img/About4.png'
import about5 from '../../../img/About5.png'
import about6 from '../../../img/About6.png'
import kurmanbek from '../../../img/Kurmanbek.png'
import kanatbek from '../../../img/Kanatbek.png'
import {useTranslation} from "react-i18next";


const OurTeam = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }


    return (<div id="our-team">
        <div className="container">
            <div className="our-team"><h1 className="our-team_title">{t("ourTeam")}</h1>
                <div className="our-team_blocks">
                    <div className="our-team_blocks-block">
                        <div className="our-team_blocks-block_bg"><img src={kurmanbek} alt=""/>
                        </div>
                        <p>{t("kurmanbekJooshbaev")}</p>
                        <span>{t("founder")}</span></div>
                    <div className="our-team_blocks-block">
                        <div className="our-team_blocks-block_bg">
                            <img src={kanatbek} alt=""/></div>
                        <p>Askerov Kanatbek</p>
                        <span>{t("founder")}</span>
                    </div>
                    <div className="our-team_blocks-block">
                        <div className="our-team_blocks-block_bg"><img src={about4} alt=""/>
                        </div>
                        <p>Miss.Tanisha kaduu </p>
                        <span>VP Of Technology</span></div>

                </div>
            </div>
        </div>
    </div>);
};

export default OurTeam;