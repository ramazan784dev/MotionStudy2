import React from 'react';
import '../../uiTwo/FirstTwo/Firsst.scss'
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import shere from '../../../../img/shere.png'
import tabBlock1 from '../../../../img/lo.png'
import tabBlock2 from '../../../../img/lp.png'
import tabBlock22 from '../../../../img/lk.png'
import {useTranslation} from "react-i18next";
const Inti = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div className="description">
            <div className="description-desc">
                <div className="description-desc_group">
                    <div className="description-desc_group-bg">
                        <h1>{t("nominalDuration")} <span>{t("4.5years")}</span></h1>
                        <h1>{t("awards")} <span>{t("B.Sc")}</span></h1>
                        <h1>{t("tuitionFee")} <span>{t("€1,400")}</span></h1>
                        <h1>{t("applicationFee")} <span>{t("€120")}</span></h1>
                        <h1>{t("registrationFee")} <span>{t("US$150")}</span></h1>
                        <h1>{t("youNeed")} <span>{t("highSchool")}</span></h1>
                        <h1>{t("entryQualication")} <span>{t("theEntry")}</span></h1>
                    </div>
                </div>
            </div>
        </div>

    );
};




export default Inti;