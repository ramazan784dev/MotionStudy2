import React from 'react';
import '../Video/video.scss'
import Slider from 'react-slick'
import commentsImg2 from '../../../img/Frame 243.png'
import commentsImg1 from '../../../img/lol.png'
import {useTranslation} from "react-i18next";
const Video = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const {t, i18n} = useTranslation()

    const changeLanguage = (language)=>{
        i18n.changeLanguage(language);
    }

    return (
        <div>
            <div id="comments">
            <div className="container">
                <div className="comments">
                    <h1 className="comments-title">{t("video")}</h1>
                    <Slider className="comments-slider" {...settings}>
                        <div>
                            <img src={commentsImg1} alt=""/>
                        </div>
                        <div>
                            <img src={commentsImg2} alt=""/>
                        </div>
                        <div>
                            <img src={commentsImg1} alt=""/>
                        </div>
                        <div>
                            <img src={commentsImg2} alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>;
        </div>
    );
};

export default Video;