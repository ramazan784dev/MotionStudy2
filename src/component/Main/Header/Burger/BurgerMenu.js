import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
import {MdEmail} from "react-icons/md";
import '../Burger/Burger.scss'
import {useTranslation} from "react-i18next";


const BurgerMenu = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }

    const [isBurger, setIsBurger] = useState(false);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    return (
        <div id="burger" style={{
            display: load ? 'none' : 'block'
        }}>
            <div className="container">
                <div className="burger">
                    <div onClick={() => setIsBurger(true) } className="burger-menu">
                        <div className="burger-menu_lg-line"></div>
                        <div className="burger-menu_sm-line"></div>
                    </div>
                </div>
            </div>
            {isBurger && (
                <>
                    <div className="burger-content">
                        <div className="burger-content_close" onClick={() => setIsBurger(false)}>
                            <div className="burger-content_close-first"></div>
                            <div className="burger-content_close-second"></div>
                        </div>
                        <nav className="burger-content_nav">
                            <NavLink className="burger-content_nav-item" to={"/"} onClick={() => setIsBurger(false)}>
                                <span>{t("home")}</span>
                            </NavLink>
                            <NavLink className="burger-content_nav-item" to={"/AboutUs"} onClick={() => setIsBurger(false)}>
                                <span>{t("aboutUs")}</span>
                                <div className="nav-circle"></div>
                            </NavLink>
                            <NavLink className="burger-content_nav-item" to={"/StudyAbroad"} onClick={() => setIsBurger(false)}>
                                <span>{t("studyAbroad")}</span>
                                <div className="nav-circle"></div>
                            </NavLink>
                            <NavLink to={'/'} className="burger-content_nav-item" onClick={() => setIsBurger(false)}>
                                <span>{t("contacts")}</span>
                                <div className="nav-circle"></div>
                            </NavLink>
                        </nav>
                        <div className="burger-content_lang-block">
                            <button onClick={() => changeLanguage("en")}>EN</button>
                            <button onClick={() => changeLanguage("ru")}>RU</button>
                            <button onClick={() => changeLanguage("kg")}>KG</button>
                        </div>
                        <div className="burger-content_icons">
                            <FaTelegramPlane className="burger-content_icons-icon"/>
                            <AiFillInstagram className="burger-content_icons-icon"/>
                            <FiPhoneCall className="burger-content_icons-icon"/>
                            <MdEmail className="burger-content_icons-icon"/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default BurgerMenu;