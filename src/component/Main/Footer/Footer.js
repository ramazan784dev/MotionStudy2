import React, {useEffect, useState} from 'react';
import footerLogo from '../../../img/motionLog.png'
import {NavLink} from "react-router-dom";
import {BsTelegram, BsYoutube} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import '../Footer/footer.scss'

const Footer = () => {


    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    return (
        <footer id="footer" style={{
            display: load ? 'none' : 'block'
        }}>
            <div className="container">
                <div className="footer">
                    <div className="footer-logo">
                        <img src={footerLogo} alt=""/>
                    </div>
                    <nav className="footer-nav">
                        <NavLink className="footer-nav_item" to={"/Main"}>
                            Home
                        </NavLink>
                        <NavLink className="footer-nav_item" to={"/AboutUs"}>
                            About Us
                        </NavLink>
                        <NavLink className="footer-nav_item" to={"/StudyAbord"}>
                            Study Abroad
                        </NavLink>
                        <NavLink className="footer-nav_item" to={"/Contact"}>
                            Contacts
                        </NavLink>
                    </nav>
                    <div className="footer-icons">
                        <BsYoutube className="footer-icons_icon"/>
                        <BsTelegram className="footer-icons_icon"/>
                        <AiFillInstagram className="footer-icons_icon"/>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-copyright">
                        <span>&copy; 2023 Motion Study LLC</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;