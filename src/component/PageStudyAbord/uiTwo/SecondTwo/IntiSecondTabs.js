import React from 'react';
import '../../uiTwo/SecondTwo/SecondTwo.scss'
import {useTranslation} from "react-i18next";
import '../../../PageStudyAbord/Explore/Malaysiaa/Style/malaysia.scss'
const IntiSecond = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div className="cost">
            <h1>{t("TheCostOfStudying")}</h1>
            <h1>{t("istitutoEuropeo")}</h1>
            <h1>{t("academicYear")}</h1>
            <h1>{t("academicYear2")}</h1>

        </div>
    );
};


export default IntiSecond;