import './App.css';
import Header from "./component/Main/Header/Header";
import Footer from "./component/Main/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Main from "./component/Main/main-page/Main";
import PageAbout from "./component/PageAboutUs";
import StudyAbroad from "./component/PageStudyAbord/StudyAbroad";
import Contact from "./component/Main/Contact/Contact";
import PageEx from "./component/Main/Exams/pageExex/PageEx";
import Discover from "./component/Main/Exams/Discover-More/Discover";
import IElts from "./component/Main/Exams/ielts/IElts";
import OtherExamps from "./component/Main/Exams/OtherExamps/OtherExamps";
import Aptis from "./component/Main/Exams/Aptis/Aptis";
import Loading from "./loading/loading";
import {useEffect, useState} from "react";
import Explore from "./component/PageStudyAbord/Explore/Explore";
import America from "./component/PageStudyAbord/Explore/America/America";
import Solbrige from "./component/PageStudyAbord/Explore/America/Solbrig/Solbrige";
import AboutUs from "./component/PageAboutUs/AboutUs/AboutUs";
import Malaysia from "./component/PageStudyAbord/Explore/Malaysiaa/Malaysia";
import SolbrijOne from "./component/PageStudyAbord/Explore/Malaysiaa/Solbrij1/SolbrijOne";
import Singapur from "./component/PageStudyAbord/Explore/Singapur/Singapur";
import { useTranslation} from "react-i18next";
import {changeLanguage} from "i18next";
import SolbrigeTwo from "./component/PageStudyAbord/Explore/Malaysiaa/Solbrij1/SolbrigeTwo";
import SolbrigeThree from "./component/PageStudyAbord/Explore/Malaysiaa/Solbrij1/SolbrigeThree";


function App() {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 3100)
    }, [])

    const {t, i18n} = useTranslation()
    const changeLanguage =(language)=>{
        i18n.changeLanguage(language);
    }


    return (

        <>
            {/*<Loading load={load}/>*/}
            {/*<div className="App" style={{*/}
            {/*    display: load ? 'none' : 'block'*/}
            {/*}}>*/}
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/explore'} element={<Explore/>}/>
                <Route path={'/america'} element={<America/>}/>
                <Route path={'/solbrige'} element={<Solbrige/>}/>
                <Route path={'/loading'} element={<Loading/>}/>
                <Route path={'/pageEx'} element={<PageEx/>}/>
                <Route path={'/discover'} element={<Discover/>}/>
                <Route path={'/iElts'} element={<IElts/>}/>
                <Route path={'/otherExamps'} element={<OtherExamps/>}/>
                <Route path={'/aptis'} element={<Aptis/>}/>
                <Route path={'/pageAbout'} element={<PageAbout/>}/>
                <Route path={'/aboutUs'} element={<AboutUs/>}/>
                <Route path={'/studyAbroad'} element={<StudyAbroad/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/malaysia'} element={<Malaysia/>}/>
                <Route path={'/solbrijOne'} element={<SolbrijOne/>}/>
                <Route path={'/SolbrijTwo'} element={<SolbrigeTwo/>}/>
                <Route path={'/SolbrijThree'} element={<SolbrigeThree/>}/>
                <Route path={'/singapur'} element={<Singapur/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
