import React from 'react';
import NavBar from './navBar.js';
import '../style/fullPage.css';

export default

class fullPage extends React.Component{

    render() {
        return(
            <div>
                <NavBar/>
                <div className="banner">
                    <div className="banner-img">
                        <span>
                            <img src={require('../image/banner_img.png')} />
                        </span>
                    </div>
                    <div className="banner-info"></div>
                </div>
            </div>)
    }
}