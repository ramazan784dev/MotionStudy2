import React from 'react';
import '../../uiTwo/FirstTwo/Firsst.scss'
import {useTranslation} from "react-i18next";
const FirstTwo1 = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div className="description">
            <div className="description-desc">
                <div className="description-desc_group">
                    <div className="description-desc_group-bg">
                        <h1>{t("ielts1")}</h1>
                        <h1>{t("weHave")}</h1>
                        <h1>{t("asia1")}</h1>
                        <h1>{t("top")}</h1>
                    </div>
                </div>
            </div>
        </div>

    );
};




export default FirstTwo1;