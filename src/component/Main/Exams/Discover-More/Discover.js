import React from 'react';
import {BsCheckLg} from "react-icons/bs";
import '../Discover-More/Discover.scss'
import discoverImg from '../../../../img/ket.png'
import {useTranslation} from "react-i18next";
const Discover = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="discover">
                <div className="container">
                    <div className="discover">
                        <h1 className="discover-title">{t("discoverExam")}</h1>
                        <div className="discover-line"></div>
                        <div className="discover-bg">
                            <img src={discoverImg} alt=""/>
                        </div>
                        <h2 className="discover-h2">{t("discoverWho")}</h2>
                        <p className="p-1">{t("discoverWhoTitle")}</p>
                        <h2 className="discover-h2">{t("discoverWhat")}</h2>
                        <h3 className="discover-h3">{t("discoverWhatOfficial")}</h3>
                        <p>{t("discoverWhatOfficialTitle")}</p>
                        <p className="p-3">{t("discoverWhatOfficialTitle2")}</p>
                        <p>{t("discoverWhatOfficialTitle3")}</p>
                        <ul className="discover-list">
                            <div>
                                <BsCheckLg className="discover-list_icon"/>
                                <li className="discover-list_item">{t("discoverWhatOfficialB2")}</li>
                            </div>
                            <div>
                                <BsCheckLg className="discover-list_icon"/>
                                <li className="discover-list_item">{t("discoverWhatOfficialC1")}</li>
                            </div>
                            <div>
                                <BsCheckLg className="discover-list_icon"/>
                                <li className="discover-list_item">{t("discoverWhatOfficialC2")}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Discover;