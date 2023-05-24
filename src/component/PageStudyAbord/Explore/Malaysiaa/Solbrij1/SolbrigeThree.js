import React from 'react';
import {useTranslation} from "react-i18next";
import kuala from '../../../../../img/Kuala.png'
import kuala2 from '../../../../../img/kuala2.png'
import TabsTwo from "../../../uiTwo/TabsTwo";
import TabsEnl from "../../../uiTwo/TabsEnl";

const SolbrigeThree = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="solbrige">
                <div className="container">
                    <div className="solbrige">
                        <h1 className="solbrige-title">{t("englishCourseInMalaysia")}</h1>
                        <div className="solbrige-group">
                            <div className="solbrige-group_bg">
                                <img src={kuala} alt=""/>
                            </div>
                            <div className="solbrige-group_desc">
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLocation")}</span>
                                    <p>{t("malaysia")}</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLanguage")}</span>
                                    <p>{t("solbrigeEnglish")}</p>
                                </div>
                                <div className="solbrige-group_desc-block job-block">
                                    <img src={kuala2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <TabsEnl/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SolbrigeThree;