import React from 'react';
import '../style/navBar.css';

export default

class NavBar extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="container clearfix">
                    <div className="logo fl">

                    </div>
                    <div className="nav fr">
                        <ul className="clearfix">
                            <li><a>首页</a></li>
                            <li><a>随笔</a></li>
                            <li><a>技术笔记</a></li>
                            <li><a>关于</a></li>
                        </ul>
                    </div>
                </div>
            </div>)
    }
}
