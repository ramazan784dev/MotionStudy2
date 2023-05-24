import React, { useEffect, useState } from "react";
import "../Contact/contact.scss";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { SlLink } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Contact = () => {
  const TOKEN = "6084284384:AAHAH38wsuEeOB9SywO90YGhpCEFiFXlhmg";
  const CHAT_ID = "-1001920141396";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [group, setGroup] = useState("");
  const [text, setText] = useState("");

  const [red, setRed] = useState(false);

  const [finish, setFinish] = useState(false);
  ////////////////////////////
  const [isSocialModal, setIsSocialModal] = useState(false);

  let message = `<b>All</b>\n`;
  message += `first name: ${firstName.trim()}\n`;
  message += `last name ${lastName.trim()}\n`;
  message += `tel: ${tel.trim()}\n`;
  message += `email: ${email.trim()}\n`;
  message += `group: ${group.trim()}\n`;
  message += `text: ${text.trim()}`;

  const fetchSubmit = async (e) => {
    await axios
      .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then(() => {
        allState()
      })
      .catch(() => {
        console.error("error");
      })
      .finally(() => {
        setFinish(true);
        setTimeout(() => {
          setFinish(false);
        }, 3000);
      });
  };
  const allState = () => {
    setFirstName("")
    setLastName("");
    setTel("");
    setEmail("");
    setGroup("");
    setText("");
  };

  const Asan = [firstName, lastName, tel, email, group, text].every(childAsan);

  function childAsan(str) {
    return str.length !== 0;
  }

  const getFinish = () => {
    return Asan ? fetchSubmit() : setRed(true);
  };

  const {t, i18n} = useTranslation()

  const changeLanguage = (language)=>{
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <div id="info">
        <div
          style={{
            display: finish ? "block" : "none",
          }}
          className="info--bg"
        >
          <h1>{t("contactAmazing")}</h1>

        </div>
        <div className="container">
          <div className="info">
            <form
              className="info-form"
              onSubmit={(e) => {
                e.preventDefault();
                getFinish();
              }}
            >
              <h2 className="info-form_title">{t("contactMessage")}</h2>
              <div className="info-form_group">
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setRed(false);
                  }}
                  name={"firstName"}
                  type="text"
                  placeholder={t("contactFirstName")}
                  className={red ? "inputRed" : "input1"}
                />
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setRed(false);
                  }}
                  name={"lastName"}
                  type="text"
                  placeholder={t("contactLastName")}
                  className={red ? "inputRed" : "input2"}
                />
                <input
                  value={tel}
                  onChange={(e) => {
                    setTel(e.target.value);
                    setRed(false);
                  }}
                  name={"tel"}
                  placeholder={t("contactPhone")}
                  className={red ? "inputRed" : "input3"}
                />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setRed(false);
                  }}
                  type="email"
                  name={"email"}
                  placeholder={t("contactEmail")}
                  className={red ? "inputRed" : "input4"}
                />
                <input
                  value={group}
                  onChange={(e) => {
                    setGroup(e.target.value);
                    setRed(false);
                  }}
                  name={"group"}
                  className={red ? "inputRed" : "info-form_group_last-input"}
                  type="text"
                  placeholder={t("contactGroup")}
                />
              </div>
              <textarea
                value={text}
                name={"text"}
                onChange={(e) => {
                  setText(e.target.value);
                  setRed(false);
                }}
                className={red ? "textRed" : "info-form_comment"}
                placeholder={t("contactHelp")}
              ></textarea>
              <button className="info-form_btn">{t("contactBtn")}</button>
            </form>
            <div className="info-address">
              <h4>{t("contactInfo")}</h4>
              <div className="info-address_group">
                <FiPhoneCall className="info-address_group-icon" />
                <span>+996 500 34 84 39</span>
              </div>
              <div className="info-address_group">
                <TfiEmail className="info-address_group-icon" />
                <span>motionweb312@gmail.com</span>
              </div>
              <div className="info-address_icons">
                <FaTelegramPlane className="info-address_icons-icon" />
                <BsWhatsapp className="info-address_icons-icon" />
                <BsInstagram className="info-address_icons-icon" />
              </div>
              <div className="info-address_location">
                <iframe
                  src={
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11694.684516598785!2d74.56904770781252!3d42.87978510000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9fc655f0bb9%3A0x20d210594faeb18!2sMotion%20Web!5e0!3m2!1sen!2skg!4v1675928666347!5m2!1sen!2skg"
                  }
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="info_social-links">
              <button
                onClick={() => setIsSocialModal(true)}
                className="info_social-links_circle"
              >
                <SlLink className="info_social-links_circle-icon" />
              </button>
            </div>
            <div
              onClick={() => setIsSocialModal(true)}
              className="info_social-links2"
            >
              <button className="info_social-links2_circle">
                <SlLink className="info_social-links2_circle-icon" />
              </button>
              <span>{t("copyTheLink")}</span>
            </div>
          </div>
        </div>
        {/*{isSocialModal && (*/}
        {/*  <div id="social-modal">*/}
        {/*    <OutsideClickHandler onOutsideClick={() => setIsSocialModal(false)}>*/}
        {/*      <div className="social-modal">*/}
        {/*        <h2>{t("send")}</h2>*/}
        {/*        <p className="social-modal_invisible-p">*/}
        {/*          {t("shareThis")}*/}
        {/*        </p>*/}
        {/*        <div className="social-modal_icons">*/}
        {/*          <div className="social-modal_icons-block whatsapp">*/}
        {/*            <BsWhatsapp className="social-modal_icons-block_icon" />*/}
        {/*          </div>*/}
        {/*          <div className="social-modal_icons-block instagram">*/}
        {/*            <BsInstagram className="social-modal_icons-block_icon" />*/}
        {/*          </div>*/}
        {/*          <div className="social-modal_icons-block facebook">*/}
        {/*            <FaFacebookF className="social-modal_icons-block_icon" />*/}
        {/*          </div>*/}
        {/*          <div className="social-modal_icons-block telegram">*/}
        {/*            <FaTelegramPlane className="social-modal_icons-block_icon" />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <button*/}
        {/*          onClick={() => setIsSocialModal(false)}*/}
        {/*          className="social-modal_btn"*/}
        {/*        >{t("done")}</button>*/}
        {/*      </div>*/}
        {/*    </OutsideClickHandler>*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default Contact;
