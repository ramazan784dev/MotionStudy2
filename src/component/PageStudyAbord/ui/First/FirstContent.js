import React from 'react';
import '../First/First.scss'
import {useTranslation} from "react-i18next";


const FirstContent = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div className="description">
                <p>{t("description")}</p>
                <p>{t("descriptionMentors")}</p>
                <p>{t("descriptionTypes")}</p>
                <p>{t("descriptionCost")}</p>
                <p>{t("descriptionEat")}</p>
                <p>{t("descriptionIncludes")}</p>
                <p>{t("descriptionSelect")}</p>
                <p>{t("descriptionSubmit")}</p>
                <p>{t("descriptionReceive")}</p>
                <p>{t("descriptionCollecting")}</p>
                <p>{t("descriptionAdditional")}</p>
                <p>{t("descriptionWe")}</p>
                <p>{t("descriptionCollege")}</p>
                <p>{t("descriptionAfter")}</p>
                <p>{t("descriptionStudy")}</p>

                <p>{t("descriptionNeed")}</p>


            </div>


        </div>
    );
};

export default FirstContent;