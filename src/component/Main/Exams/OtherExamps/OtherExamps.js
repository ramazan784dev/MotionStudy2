import React from 'react';
import otherExamsImg from '../../../../img/look.png'
import '../OtherExamps/OtherExamps.scss'
import {useTranslation} from "react-i18next";
const OtherExamps = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="other-exams">
                <div className="container">
                    <div className="other-exams">
                        <h1 className="other-exams_title">{t("otherExams")}</h1>
                        <div className="other-exams_line"></div>
                        <div className="other-exams_bg">
                            <img src={otherExamsImg} alt=""/>
                        </div>
                        <h2 className="other-exams_h2">{t("otherPaper")}</h2>
                        <p>{t("otherOur")}</p>
                        <ul className="other-exams_list list-1">
                            <li>{t("otherSend")}</li>
                            <li>{t("otherWhen")}</li>
                            <li>{t("otherSome")}</li>
                            <li>{t("otherConsider")}</li>
                        </ul>
                        <h2>{t("otherId")}</h2>
                        <ul className="other-exams_list list-2">
                            <li className="bold">{t("otherEach")}</li>
                        </ul>
                        <h2>{t("otherFrequently")}</h2>
                        <ul className="other-exams_list list-3">
                            <li className="title">{t("otherWhere")}</li>
                            <li>{t("otherParking")}</li>
                            <li className="title">{t("otherWhat")}</li>
                            <li>{t("otherYou")}</li>
                            <li className="title">{t("otherHow")}</li>
                            <li>{t("otherThe")}</li>
                            <li className="title">{t("otherWhere2")}</li>
                            <li>{t("otherYouWill")}</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OtherExamps;