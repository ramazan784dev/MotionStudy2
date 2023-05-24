import React, {useState} from 'react';
import './hero.scss'
import heroSmImg1 from '../../../img/hero-first.png'
import motion from '../../../img/MotionStudents2.png'
import motion2 from '../../../img/MotionStudents3.png'
import heroLgImg1 from '../../../img/hero-second.png'
import heroLgImg2 from '../../../img/mentor.png'
import heroSmImg2 from '../../../img/hero-fourth.png'
import heroContactImg1 from '../../../img/person.png'
import heroContactImg2 from '../../../img/phone.png'
import {NavLink, useNavigate} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import {useTranslation} from "react-i18next";


const Hero = () => {
    const [searchContent, setSearchContent] = useState(false);
    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <NavLink className="hero-search" onClick={() => setSearchContent(true)}>
                        <CiSearch className="hero-search_icon"/>
                        <input type="text" placeholder="Поиск..."/>
                        {searchContent && (
                            <OutsideClickHandler
                                onOutsideClick={() => setSearchContent(false)}
                            >
                                <div id="search-wrap">
                                    <div className="search-content">
                                        <NavLink to={"/America"} className="search-content_item">United States</NavLink>
                                        <NavLink to={"/Singapur"} className="search-content_item">Singapore</NavLink>
                                        <NavLink to={"/Malaysia "} className="search-content_item">Malaysia</NavLink>
                                    </div>
                                </div>
                            </OutsideClickHandler>
                        )}
                    </NavLink>
                    <div className="hero-desc">
                        <h3 className="hero-desc_subtitle">{t("explore")}</h3>
                        <h1 className="hero-desc_title">{t("study")}</h1>
                        <p>
                            {t("studyAt")}
                        </p>
                    </div>
                    <div className="hero-block">
                        <div className="hero-block_sm-img sm-1">
                            <img src={heroSmImg1} alt=""/>
                        </div>
                        <div className="hero-block_lg-img lg-1">
                            <img style={{
                                borderRadius: '100%'
                            }} src={motion} alt="" />
                        </div>
                        <div  className="hero-block_lg-img lg-2">
                            <img style={{
                                borderRadius: '100%'
                            }} src={motion2} alt="" />
                        </div>
                        <div className="hero-block_lg-img lg-2">
                            <img src={heroLgImg2} alt=""/>
                        </div>
                        <div className="hero-block_sm-img sm-2">
                            <img src={heroSmImg2} alt=""/>
                        </div>
                        <div className="hero-block_blur-top">
                            <div></div>
                        </div>
                        <div className="hero-block_blur-bottom">
                            <div></div>
                        </div>
                    </div>
                    <NavLink to={"/Contact"}>
                        <div className="hero-contact">
                            <div className="hero-contact_group">
                                <div className="hero-contact_group-bg">
                                    <img src={heroContactImg1} alt=""/>
                                </div>
                                <div className="hero-contact_group-desc">
                                    <h5>{t("heroName")}</h5>
                                    <input type="text" placeholder={t("enterHeroName")}/>
                                </div>
                            </div>
                            <div className="hero-contact_group">
                                <div className="hero-contact_group-bg">
                                    <img src={heroContactImg2} alt=""/>
                                </div>
                                <div className="hero-contact_group-desc">
                                    <h5>{t("heroPhone")}</h5>
                                    <input type="text" placeholder={t("heroPhoneEnter")}/>
                                </div>
                            </div>
                            <button className="hero-contact_btn">{t("heroBtnContact")}</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Hero;