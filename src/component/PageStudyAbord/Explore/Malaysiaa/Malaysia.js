import kuala from '../../../../img/Kuala.png'
import React from 'react';
import '../America/america.scss'
import '../Malaysiaa/Malaysia.scss'
import americaImg1 from "../../../../img/univer.png";
import {NavLink} from "react-router-dom";
import {SlLocationPin} from "react-icons/sl";
import americaImg2 from "../../../../img/solbr.png";
import {Scroll} from "../../../../Scroll/Scroll";
import {useTranslation} from "react-i18next";

const Malaysia = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
                <div id="america">
                    <div className="container">
                        <div className="america">
                            <h1 className="america-title">{t("malaysia")}</h1>
                            <div className="america-blocks">
                                <div className="america-blocks_block">
                                    <div className="america-blocks_block-bg">
                                        <img src={americaImg1} alt=""/>
                                    </div>
                                    <NavLink to={"/SolbrijOne"} className="america-blocks_block-name">
                                        <span>{t("heroName")}</span>
                                        <h3>{t("inti")}</h3>
                                    </NavLink>
                                    <div className="america-blocks_block-location">
                                        <div className="america-blocks_block-location_group">
                                            <span>{t("solbrigeLocation")}</span>
                                            <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                        </div>
                                        <p>{t("malaysia")}</p>
                                    </div>
                                    <div className="america-blocks_block-age">
                                        <span>{t("intiAge")}</span>
                                        <p>{t("intiAgeFrom")}</p>
                                    </div>
                                </div>
                                <div className="america-blocks_block">
                                    <div className="america-blocks_block-bg">
                                        <img src={americaImg2} alt=""/>
                                    </div>
                                    <NavLink to={"/SolbrijTwo"} onClick={Scroll} className="america-blocks_block-name">
                                        <span>{t("heroName")}</span>
                                        <h3>{t("apu")}</h3>
                                    </NavLink>
                                    <div className="america-blocks_block-location">
                                        <div className="america-blocks_block-location_group">
                                            <span>{t("solbrigeLocation")}</span>
                                            <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                        </div>
                                        <p>{t("malaysia")}</p>
                                    </div>
                                    <div className="america-blocks_block-age">
                                        <span>{t("intiAge")}</span>
                                        <p>{t("intiAgeFrom")}</p>
                                    </div>
                                </div>
                                <div className="america-blocks_block">
                                    <div className="america-blocks_block-bg">
                                        <img src={kuala} alt=""/>
                                    </div>
                                    <NavLink to={"/SolbrijThree"} onClick={Scroll} className="america-blocks_block-name">
                                        <span>{t("heroName")}</span>
                                        <h3>{t("englishCourseInMalaysia")}</h3>
                                    </NavLink>
                                    <div className="america-blocks_block-location">
                                        <div className="america-blocks_block-location_group">
                                            <span>{t("solbrigeLocation")}</span>
                                            <SlLocationPin className="america-blocks_block-location_group-icon"/>
                                        </div>
                                        <p>{t("malaysia")}</p>
                                    </div>
                                    <div className="america-blocks_block-age">
                                        <span>{t("intiAge")}</span>
                                        <p>{t("intiAgeFrom")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};



export default Malaysia;