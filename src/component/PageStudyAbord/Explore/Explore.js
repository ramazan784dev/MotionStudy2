import React from 'react';
import '../Explore/explore.scss'
import {NavLink} from "react-router-dom";
import {Scroll} from "../../../Scroll/Scroll";
import americaImg from '../../../img/image 98.png'
import singapur from "../../../img/singapore-flag-784.avif"
import malasya from "../../../img/malasya-flag-784.png"
import {useTranslation} from "react-i18next";


const Explore = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }


    return (
        <div>
            <div id="explore">
                <div className="container">
                    <div className="explore">
                        <h1 className="explore-title">{t("exploreChoose")}</h1>
                        <div className="explore-blocks">
                            <div className="explore-blocks_block">
                                <NavLink to={"/America"} onClick={Scroll} className="explore-blocks_block-link">
                                    <div className="explore-blocks_block-bg">
                                        <img src={americaImg} alt=""/>
                                    </div>
                                    <h4 className="explore-blocks_block-title">{t("america")}</h4>
                                    <h4 className="explore-blocks_block_invisible-heading">America</h4>
                                </NavLink>
                            </div>
                            <div className="explore-blocks_block">
                                <NavLink  to={'/Singapur'} onClick={Scroll} className="explore-blocks_block-link">
                                    <div className="explore-blocks_block-bg">
                                        <img src={singapur} alt="img"/>
                                    </div>
                                    <h4 className="explore-blocks_block-title">{t("singapore")}</h4>
                                    <h4 className="explore-blocks_block_invisible-heading">Singapore</h4>
                                </NavLink>
                            </div>
                            <div className="explore-blocks_block">
                                <NavLink  to={'/Malaysia'}   onClick={Scroll} className="explore-blocks_block-link">
                                    <div className="explore-blocks_block-bg">
                                        <img src={malasya} alt="img"/>
                                    </div>
                                    <h4 className="explore-blocks_block-title">{t("malaysia")}</h4>
                                    <h4 className="explore-blocks_block_invisible-heading">Malaysia</h4>
                                </NavLink>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Explore;