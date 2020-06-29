import React from 'react';
import avatar from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg'

const MainContent = () => {
    return (
        <div className='container'>
            <h1>
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
            </h1>
            <p>
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
            </p>
            <footer>
                <div className="profileSection">
                    <figure>
                        <img className='profile' src={avatar} alt='profile' />
                        <figcaption>
                            <span>Michelle Appleton</span>
                            <span> 28 Jun 2020</span>
                        </figcaption>
                    </figure>
                    <div className="shareSection">
                        <img class='proceed' src={share} alt='share infor'
                         onClick={() => console.log("share1 clicked")} />
                    </div>
                    <div className="socialShare">
                        <h2>Share</h2>
                        <span className="socialIcons">
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={pinterest} alt="" />
                        </span>
                        <span className="shareSection">
                            <img className='proceed' src={share} alt='share infor'
                            onClick={() => console.log("share2 clicked")} />
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default MainContent