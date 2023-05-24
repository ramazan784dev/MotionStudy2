import React from 'react';
import '../Singapur/singapur.scss'
import {useTranslation} from "react-i18next";
import king from '../../../../img/Kibgstone.png'

const Singapur = () => {
    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div>
            <div id="solbrige">
                <div className="container">
                    <div className="solbrige">
                        <h1 className="solbrige-title">{t("singapore")}</h1>
                        <div className="solbrige-group">
                            <div className="solbrige-group_bg">
                                <img src={king} alt=""/>
                            </div>
                            <div className="solbrige-group_desc">
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLocation")}</span>
                                    <p>{t("singapore")}</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeDate")}</span>
                                    <p>1899</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("solbrigeLanguage")}</span>
                                    <p>{t("solbrigeEnglish")}</p>
                                </div>
                                <div className="solbrige-group_desc-block">
                                    <span>{t("age")}</span>
                                    <p>18</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>{t("solbrigeSpecialities")}</h1>
                                <h3>{t("solbrigeSales")}</h3>
                            </div>
                            <div>
                                <h3>{t("pays")}</h3>
                                <h3>{t("youWillReceive")}</h3>
                            </div>
                            <div>
                                <h1>{t("conditions")}</h1>
                            </div>
                            <div>
                                <h3>{t("1Must")}</h3>
                                <h3>{t("2.1stMonthly")}</h3>
                                <h3>{t("1stMonth")}</h3>
                            </div>
                            <div>
                                <h1>{t("standard$500")}</h1>
                                <h2>{t("mandatoryServices")}</h2>
                            </div>
                            <div>
                                <h3>{t("applySingapore")}</h3>
                                <h3>{t("obtaining")}</h3>
                            </div>
                            <div>
                                <h1>{t("documents")}</h1>
                                <h3>{t("1Scan")}</h3>
                                <h3>{t("2Birth")}</h3>
                                <h3>{t("3Image")}</h3>
                                <h3>{t("4Show")}</h3>
                                <h3>{t("5Must")}</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};


export default Singapur;