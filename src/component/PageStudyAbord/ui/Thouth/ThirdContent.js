import React from 'react';
import '../Thouth/ThoutContent.scss'
import solbrige1 from '../../../../img/solbrige1.png'
import solbrige2 from '../../../../img/solbrige2.png'
import solbrige3 from '../../../../img/solbrige3.png'
import solbrige4 from '../../../../img/solbrige4.png'
import solbrige5 from '../../../../img/solbrige5.png'
import solbrige6 from '../../../../img/solbrige6.png'
const ThirdContent = () => {
    return (
        <div id='third'>
            <div className='container'>
                <div className='third'>
                    <img src={solbrige1} alt="img"/>
                    <img src={solbrige2} alt="img"/>
                    <img src={solbrige3} alt="img"/>
                    <img src={solbrige4} alt="img"/>
                    <img src={solbrige5} alt="img"/>
                    <img src={solbrige6} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default ThirdContent;