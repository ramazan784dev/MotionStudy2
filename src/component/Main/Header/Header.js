import React, { useEffect, useState } from "react";
import "./header.scss";
import motion from "../../../img/Vector.png";
import { Link, NavLink } from "react-router-dom";
import { Scroll } from "../../../Scroll/Scroll";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import { CiSearch } from "react-icons/ci";
import BurgerMenu from "./Burger/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import {useTranslation} from "react-i18next";

const Header = () => {
  const [searchContent, setSearchContent] = useState(false);
  const [load, setLoad] = useState(true);
  const [getLanguages, setGetLanguages] = useState("");

  const dispatch = useDispatch();
const lang = localStorage.getItem("i18nextLng")
  const {l} = useSelector(s => s)


 const handleChange = () => {
    localStorage.setItem("add", JSON.stringify(getLanguages))
 }

  useEffect(() => {
    setLoad(true);
    dispatch({ type: "ADD_LANGUAGE", payload: l });
    setTimeout(() => {
      setLoad(false);
    }, 3100);
  }, [handleChange()]);

  const {t, i18n} = useTranslation()

  const changeLanguage =(language)=>{
    i18n.changeLanguage(language);
  }

  return (
    <>
      <header
        id="header"
        style={{
          display: load ? "none" : "block",
        }}
      >
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <NavLink to={"/"}>
                <img src={motion} alt={"#"} />
              </NavLink>
            </div>
            <div className="header-right">
              <nav className="header-right_nav">
                <NavLink className="header-right_nav-item" to={"/"}>
                  <span>{t("home")}</span>
                  <div className="nav-circle"></div>
                </NavLink>
                <NavLink
                  onClick={Scroll}
                  className="header-right_nav-item"
                  to={"/AboutUs"}
                >
                  <span>{t("aboutUs")}</span>
                  <div className="nav-circle"></div>
                </NavLink>
                <NavLink
                  onClick={Scroll}
                  className="header-right_nav-item"
                  to={"/StudyAbroad"}
                >
                  <span>{t("studyAbroad")}</span>
                  <div className="nav-circle"></div>
                </NavLink>
                <Link
                  onClick={Scroll}
                  to={"/Contact"}
                  className="header-right_nav-item"
                >
                  <span>{t("contacts")}</span>
                  <div className="nav-circle"></div>
                </Link>
              </nav>
              <div onClick={() => setSearchContent(true)} className="header-right_search">
                <CiSearch className="header-right_search-icon" />
                <input
                  className={`header-right_search-input `}
                  type="text"
                  placeholder={t("placeholder")}
                />

                {searchContent && (
                  <OutsideClickHandler
                    onOutsideClick={() => setSearchContent(false)}
                  >
                    <div id="search-wrap">
                      <div className="search-content">
                        <NavLink to={'/America'}   className="search-content_item" >
                            {t("america")}
                        </NavLink>

                        <NavLink to={'/Malaysia'} className="search-content_item">
                            {t("malaysia")}
                        </NavLink>
                          <NavLink to={"/Singapur"} className="search-content_item">
                              {t("singapore")}
                          </NavLink>

                      </div>
                    </div>
                  </OutsideClickHandler>
                )}
              </div>
              <div className="header-right_langs">
                <select
                  onChange={(e) => {changeLanguage(e.target.value)}} defaultValue={lang}>
                    <option value="en" onClick={() => changeLanguage("en")}>En</option>
                    <option value="ru" onClick={() => changeLanguage("ru")}>Ru</option>
                    <option value="kg" onClick={() => changeLanguage("kg")}>Kg</option>

                </select>
              </div>
            </div>
          </div>
        </div>
      </header>
      <BurgerMenu />
    </>
  );
};

export default Header;
