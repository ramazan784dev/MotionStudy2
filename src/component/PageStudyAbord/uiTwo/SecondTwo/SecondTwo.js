import React from 'react';
import '../../uiTwo/SecondTwo/SecondTwo.scss'
import {useTranslation} from "react-i18next";
import '../../../PageStudyAbord/Explore/Malaysiaa/Style/malaysia.scss'
const SecondTwo = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div className="cost">
            <h1>{t("$450Monthly")}</h1>
            <h1>{t("monthlyFixed")}</h1>
             <h1>{t("service")}</h1>
            <h1>{t("whatkind")}</h1>
            <h1>{t("choosing")}</h1>
            <h1>{t("IfNecessary")}</h1>
        </div>
    );
};


export default SecondTwo;