import React from 'react';
import './AboutUs.scss'
import OurTeam from "../OurTeam/OurTeam";
import motion from '../../../img/MotionStudents5.png'
import {useTranslation} from "react-i18next";


const AboutUs = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }


    return (

        <div id="about-hero">
        <div className="container">
            <div className="about-hero">
                <div className="about-hero_bg"><img src={motion} alt=""/>
                </div>
                <div className="about-hero_desc">
                    <span className="about-hero_desc-subtitle">{t("aboutUs")}</span>                        <h1
                    className="about-hero_desc-title">{t("aboutBest")}</h1>
                    <span className="about-hero_desc-bold">{t("aboutSpan")}</span>
                    <p>{t("aboutP")}</p>
                </div>
                <div className="about-hero_frame"></div>
            </div>
            <OurTeam/>
        </div>
    </div>

    );

};

export default AboutUs;