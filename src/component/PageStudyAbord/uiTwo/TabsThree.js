import React, {useState} from 'react';
import FirstTwo from "../uiTwo/FirstTwo/FirstTwo";
import '../ui/TabsStudy.scss'
import SecondTwo from "./SecondTwo/SecondTwo";
import ThirdContent from "../ui/Thouth/ThirdContent";
import {useTranslation} from "react-i18next";
import FirstContent from "../ui/First/FirstContent";
import SecondContent from "../ui/Scond/SecondContent";



const TabsThree = () => {
    const [index, setIndex] = useState(0);
    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }
    return (
        <div>
            <div className="tabs">
                <div className="tabs-headings">
                    <div className={`tabs-headings_heading ${index === 0}`} onClick={() => {
                        setIndex(0)
                    }}>
                        <span>{t("descriptionD")}</span>
                    </div>
                    <div className={`tabs-headings_heading ${index === 1}`} onClick={() => {
                        setIndex(1)
                    }}>
                        <span>{t("cost")}</span>
                    </div>
                    <div className={`tabs-headings_heading ${index === 2}`} onClick={() => {
                        setIndex(2)
                    }}>
                        <span>{t("photo")}</span>
                    </div>
                </div>
                <div className="tabs-content" hidden={index !== 0}>
                    <div className="line-tab" hidden={index !== 0}></div>
                    <FirstContent/>
                </div>
                <div className="tabs-content" hidden={index !== 1}>
                    <div className="line-tab2"></div>
                    <SecondContent/>
                </div>
                <div className="tabs-content" hidden={index !== 2}>
                    <div className="line-tab3"></div>
                    <ThirdContent/>
                </div>
            </div>
        </div>
    );
};




export default TabsThree;