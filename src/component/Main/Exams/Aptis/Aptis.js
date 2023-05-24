import React from 'react';
import aptisImg from    '../../../../img/Examps.png'
import '../Aptis/aptis.scss'
import {useTranslation} from "react-i18next";
const Aptis = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="aptis">
                <div className="container">
                    <div className="aptis">
                        <h1 className="aptis-title">{t("aptisWhat")}</h1>
                        <div className="aptis-line"></div>
                        <div className="aptis-bg">
                            <img src={aptisImg} alt=""/>
                        </div>
                        <h2 className="aptis-h2">{t("aptisWhatComplete")}</h2>
                        <p className="p-1">{t("aptisWhatIntroduced")}</p>
                        <ul className="aptis-list">
                            <li>{t("aptisListening")}</li>
                            <li>{t("aptisReading")}</li>
                            <li>{t("aptisWriting")}</li>
                            <li>{t("aptisSpeaking")}</li>
                        </ul>
                        <h2 className="aptis-h2">{t("aptistypes")}</h2>
                        <p className="p-2">{t("aptisAnyone")}</p>
                        <ul className="aptis-list2">
                            <li>{t("aptisReliable")}</li>
                            <li>{t("aptisFrequency")}</li>
                            <li>{t("aptisAccepted")}</li>
                            <li>{t("aptisFace")}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aptis;