import React from 'react';
import Hero from "../Hero/Hero";
import BestForm from "../BestForm/BestForm";
import Contact from "../Contact/Contact";
import Exams from "../Exams/Exams";
import Video from "../Video/Video";
import Founders from "../Founders/Founders";

const Main = () => {
    return (
        <>
            <Hero/>
            <BestForm/>
            <Exams/>
            <Video/>
            <Contact/>
        </>
    );
};

export default Main;