import React from 'react';
import avatar from './images/avatar-michelle.jpg';
import share from './images/icon-share.svg';

const MainContent = () => {
    return (
        <div class='container'>
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
                <div class="profileSection">
                    <figure>
                        <img class='profile' src={avatar} alt='profile' />
                        <figcaption>
                            <span>Michelle Appleton</span>
                            <span> 28 Jun 2020</span>
                        </figcaption>
                    </figure>
                    <div class="shareSection">
                        <img class='proceed' src={share} alt='share infor' />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default MainContent