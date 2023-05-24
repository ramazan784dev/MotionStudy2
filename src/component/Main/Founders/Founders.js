import React from 'react';
import './founders.scss'
import img1 from '../../../img/Kurmanbek.png'
import img2 from '../../../img/Kanatbek.png'
import {useTranslation} from "react-i18next";

const Founders = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div id="founders">
            <div className="container">
                <div className="founders">
                    <div className="">
                        <h1 className="founders__found">{t("founders")}</h1>
                        <p className="founders__web">{t("motionWebIT")}</p>
                    </div>
                    <div className="founders__bloc2">
                        <div className="founders__bloc2--Ku">
                            <img src={img1} alt=""/>
                            <h1>{t("kurmanbekJooshbaev")}</h1>
                            <p>{t("founder")}</p>
                        </div>
                        <div className="founders__bloc2--Ka">
                            <img src={img2} alt=""/>
                            <h1>Askerov Kanatbek</h1>
                            <p>{t("founder")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founders;