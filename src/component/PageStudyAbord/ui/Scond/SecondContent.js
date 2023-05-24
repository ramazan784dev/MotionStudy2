import React from 'react';
import '../Scond/Second.scss'
import {useTranslation} from "react-i18next";

const SecondContent = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div id='second'>
            <div className='container'>
                <div className='second'>
                    <p>{t("general")}</p>
                    <p>{t("generalPassport")}</p>
                    <p>{t("generalMinimum")}</p>
                    <p>{t("generalTOEFL")}</p>
                    <p>{t("generalDuolingo")}</p>
                    <p>{t("generalThese")}</p>
                    <p>{t("generalReference")}</p>
                    <p>{t("generalPay")}</p>
                    <p>{t("generalTax")}</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default SecondContent;