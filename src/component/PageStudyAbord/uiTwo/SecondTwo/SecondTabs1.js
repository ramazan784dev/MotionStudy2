import React from 'react';
import '../../uiTwo/SecondTwo/SecondTwo.scss'
import {useTranslation} from "react-i18next";
import '../../../PageStudyAbord/Explore/Malaysiaa/Style/malaysia.scss'
const SecondTwo2 = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div className="cost">
            <h1>{t("studyC")}</h1>
            <h1>{t("studentV")}</h1>
            <h1>{t("initial")}</h1>
            <h1>{t("admin")}</h1>
            <h1>{t("accommodation")}</h1>
            <h1>{t("youCanEarn")}</h1>
        </div>
    );
};


export default SecondTwo2;