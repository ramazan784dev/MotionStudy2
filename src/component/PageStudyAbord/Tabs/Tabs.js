import React from 'react';
import {GoChevronDown} from "react-icons/go";
import '../Tabs/Tabs.scss'
const Tabs = () => {
    return (
        <div>
            <div className="explore-tabs">
                <div className="explore-tabs_tab tab1">
                    <input type="checkbox" id="toggle-input1"/>
                    <label htmlFor="toggle-input1" className="explore-tabs_tab-label">
                        <span>Higher Education</span>
                        <GoChevronDown className="explore-tabs_tab-label_icon"/>
                    </label>
                    <div className="explore-tabs_tab-wrap">
                        <div className="explore-tabs_tab-wrap_block">
                            <p>Secondary Education</p>
                            <p>Higher Education</p>
                            <p>Language courses for youth</p>
                            <p>Children's language camps</p>
                        </div>
                    </div>
                </div>
                <div className="explore-tabs_tab tab2">
                    <input type="checkbox" id="toggle-input2"/>
                    <label htmlFor="toggle-input2" className="explore-tabs_tab-label">
                        <span>Specialization</span>
                        <GoChevronDown className="explore-tabs_tab-label_icon"/>
                    </label>
                    <div className="explore-tabs_tab-wrap">
                        <div className="explore-tabs_tab-wrap_block">
                            <p>IT Technologies</p>
                            <p>Bisiness</p>
                            <p>Medicine</p>
                            <p>International Relationships</p>
                            <p>Tourism</p>
                        </div>
                    </div>
                </div>
                <div className="explore-tabs_tab tab3">
                    <input type="checkbox" id="toggle-input3"/>
                    <label htmlFor="toggle-input3" className="explore-tabs_tab-label">
                        <span>Сountries</span>
                        <GoChevronDown className="explore-tabs_tab-label_icon"/>
                    </label>
                    <div className="explore-tabs_tab-wrap">
                        <div className="explore-tabs_tab-wrap_block">
                            <p>America</p>
                            <p>Germany</p>
                            <p>Indonesia</p>
                            <p>South Korea</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tabs;