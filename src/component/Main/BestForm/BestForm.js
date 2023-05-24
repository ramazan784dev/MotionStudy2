import React, { useEffect } from "react";
import "./bestForm.scss";
import bestPersons from "../../../img/diplom.png";
import { TbBook } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { WeRBest } from "../../../fakeBack/fakeBack";
import { useSelector } from "react-redux";
import {useTranslation} from "react-i18next";
import motion from '../../../img/MotionStudents1.png'

const BestForm = () => {
  const EN = WeRBest.EN.best;
  const RU = WeRBest.RU.best;
  const KG = WeRBest.KG.best;
  const { l } = useSelector((s) => s);

  console.log(l);
  console.log(l === "RU");

  const {t, i18n} = useTranslation()

  const changeLanguage = (language)=>{
    i18n.changeLanguage(language);
  }

  return (
    <div id="best">
      <div className="container">
        <div className="best">
          <div className="best--left">
            <h1>{t("bestThis")}</h1>
            <p>
              {t("bestWe")}
            </p>
            <img src={motion} alt="img" />
          </div>
          <div className="best--right">
            <div className="best--right__top">
              <div className="best--right__top--left">
                <div className="best--right__top--left__icon">
                  <TbBook className="icon" />
                </div>
                <div className="best--right__top--left__h1">
                  <h1>{t("bestPartners")}</h1>
                </div>
                <div className="best--right__top--left__h3">
                  <h3>{t("bestPartnersTitle")}</h3>
                </div>
              </div>
              <div className="best--right__top--right">
                <div className="best--right__top--right__icon">
                  <FaBookReader className="icon" />
                </div>
                <div className="best--right__top--right__h1">
                  <h1>{t("bestExperts")}</h1>
                </div>
                <div className="best--right__top--right__h3">
                  <h3>{t("bestExpertsTitle")}</h3>
                </div>
              </div>
            </div>
            <div className="best--right__bottom">
              <div className="best--right__bottom--left">
                <div className="best--right__bottom--left__icon">
                  <BiTimeFive className="icon" />
                </div>
                <div className="best--right__bottom--left__h1">
                  <h1>{t("bestTime")}</h1>
                </div>
                <div className="best--right__bottom--left__h3">
                  <h3>{t("bestTimeTitle")}</h3>
                </div>
              </div>
              <div className="best--right__bottom--right">
                <div className="best--right__bottom--right__icon">
                  <AiOutlineDollar className="icon" />
                </div>
                <div className="best--right__bottom--right__h1">
                  <h1>{t("bestPrice")}</h1>
                </div>
                <div className="best--right__bottom--right__h3">
                  <h3>{t("bestPriceTitle")}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestForm;
