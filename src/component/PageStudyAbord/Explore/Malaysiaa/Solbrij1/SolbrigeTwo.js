import React from 'react';
import {useTranslation} from "react-i18next";
import apu from '../../../../../img/APU.png'
import TabsTwo from "../../../uiTwo/TabsTwo";

const SolbrigeTwo = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="solbrige">
                <div className="container">
                    <div className="solbrige">
                        <h1 className="solbrige-title">{t("apu")}</h1>
                        <div className="solbrige-group">
                            <div className="solbrige-group_bg">
                                <img src={apu} alt=""/>
                            </div>
                            <div className="solbrige-group_desc">
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLocation")}</span>
                                    <p>{t("malaysia")}</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeDate")}</span>
                                    <p>1993</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeTypes")}</span>
                                    <p>{t("solbrigeCourse")}</p>
                                </div>
                                <div className="solbrige-group_desc-block job-block">
                                    <span>{t("solbrigeSpecialities")}</span>
                                    <div className="solbrige-group_desc-block_wrap">
                                        <p>{t("solbrigeFashion")}</p>
                                        <p>{t("solbrigeJewerly")}</p>
                                        <p>{t("solbrigeShoe")}</p>
                                        <p>{t("solbrigeInterior")}</p>
                                        <p>{t("solbrigelandscape")}</p>
                                        <p>{t("solbrigeCar")}</p>
                                        <p>{t("solbrigePhotography")}</p>
                                    </div>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLanguage")}</span>
                                    <p>{t("solbrigeEnglish")}</p>
                                </div>
                            </div>
                        </div>
                        <TabsTwo/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SolbrigeTwo;