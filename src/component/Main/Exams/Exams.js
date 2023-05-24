import React from 'react';
import '../../../style/exams.scss'
import zub  from '../../../img/p.png'
import exams from '../../../img/negr.svg'
import exam3 from '../../../img/negr2.svg'
import exam4 from '../../../img/negr3.svg'
import '../../Main/Exams/Exams.scss'
import {NavLink} from "react-router-dom";
import {Scroll} from "../../../Scroll/Scroll";
import '../Exams/pageExex/PageEx'
import {useTranslation} from "react-i18next";


const Exams = () => {

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <>
            <div id="exams">
                <div className="container">
                    <div className="exams">
                        <h1 className="exams-title">{t("exams")}</h1>
                        <p className="exams-p">{t("examsTitle")}</p>
                        <div className="exams-group">
                            <div className="exams-group_block">
                                <div className="exams-group_block-bg">
                                    <img src={zub} alt=""/>
                                </div>
                                <div className="exams-group_block-desc">
                                    <span className="exams-group_block-desc_subtitle">{t("cambrigeExam")}</span>
                                    <h4 className="exams-group_block-desc_title">{t("cambrigeExamPath")}</h4>
                                    <p>{t("cambrigeExamPathTitle")}</p>
                                    <NavLink className="exams-group_block-desc_link" onClick={Scroll}
                                         to={"/Discover"}>{t("cambrigeExamBtn")}</NavLink>
                                </div>
                            </div>
                            <div className="exams-group_blocks">
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={exams} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink onClick={Scroll} className="exams-group_blocks-block_desc-link" to={'/aptis'}>{t("aptis")}</NavLink>
                                        <h4>{t("aptisChoose")}</h4>
                                        <p>{t("aptisChooseTitle")}</p>
                                    </div>
                                </div>
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={exam3} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink onClick={Scroll} className="exams-group_blocks-block_desc-link" to={'/iElts'}>{t("ielts")}</NavLink>
                                        <h4>{t("ieltsKnow")}</h4>
                                        <p>{t("ieltsExam")}</p>
                                    </div>
                                </div>
                                <div className="exams-group_blocks-block">
                                    <div className="exams-group_blocks-block_bg">
                                        <img src={exam4} alt=""/>
                                    </div>
                                    <div className="exams-group_blocks-block_desc">
                                        <NavLink className="exams-group_blocks-block_desc-link" to={'/otherExamps'} >{t("otherExams")}</NavLink>
                                        <h4>{t("examsBesides")}</h4>
                                        <p>{t("examBut")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exams;