import React from 'react';
import {NavLink} from "react-router-dom";
import {Scroll} from "../../Scroll/Scroll";
import  '../PageStudyAbord/StudyAbroad.scss'
import {useTranslation} from "react-i18next";
import trac from  '../../img/MotionStudents4.png'

const StudyAbroad = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="study">
                <div className="container">
                    <div className="study">
                        <div className="study-title">
                            <h1>{t("studyAbroad")}</h1>
                            <div></div>
                        </div>
                        <div className="study-group">
                            <div className="study-group_bg">
                                <div className="study-group_bg-img">
                                    <img src={trac} alt=""/>
                                </div>
                                <div className="study-group_bg-frame"></div>
                            </div>
                            <div className="study-group_desc">
                                <p className="study-group_desc-p">{t("studyAbroadMotion")}</p>
                                <ul>
                                    <span><b>{t("studyAbroadPartners")}</b></span>
                                    <li>{t("studyAbroadPartners1")}</li>
                                    <li>{t("studyAbroadPartners2")}</li>
                                    <li>{t("studyAbroadPartners3")}</li>
                                    <li>{t("studyAbroadPartners4")}</li>
                                    <li>{t("studyAbroadPartners5")}</li>
                                    <li>{t("studyAbroadPartners6")}</li>
                                    <li>{t("studyAbroadPartner7")}</li>
                                    <li>{t("studyAbroadPartner8")}</li>
                                    <li>{t("studyAbroadPartner9")}</li>
                                </ul>
                                <div className='btn-study'>
                                    <NavLink to={"/Explore"} onClick={Scroll} className="study-group_desc-btn">{t("explore")}</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;