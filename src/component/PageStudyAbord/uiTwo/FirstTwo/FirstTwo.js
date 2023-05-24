
import React from 'react';
import '../../uiTwo/FirstTwo/Firsst.scss'
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import shere from '../../../../img/shere.png'
import tabBlock1 from '../../../../img/lo.png'
import tabBlock2 from '../../../../img/lp.png'
import tabBlock22 from '../../../../img/lk.png'
import {useTranslation} from "react-i18next";
const FirstTwo = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div className="description">
            <div className="description-desc">
                <div className="description-desc_group">
                    <div className="description-desc_group-bg">
                        <h1>{t("teachesFrom")}</h1>
                        <h1>{t("Lasts10-1")}</h1>
                        <h1>{t("everyoneSpeaks")}</h1>
                        <h1>{t("intensive")}</h1>
                        <h1>{t("theSchool")}</h1>
                        <h1>{t("noVisa")}</h1>
                        <h1>{t("visasAreIssued")}</h1>
                        <h1>{t("youCan'tEnter")}</h1>
                        <h1>{t("theResponse")}</h1>
                    </div>
                </div>
            </div>
        </div>

    );
};




export default FirstTwo;