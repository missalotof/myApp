import React from 'react';


export default

class NavBar extends React.Component {

    render() {
        return (
            <div className="topBar">
                <div className="logo">

                </div>
                <div className="nav">
                    <ul>
                        <li>首页</li>
                        <li>随笔</li>
                        <li>技术笔记</li>
                        <li>关于</li>
                    </ul>
                </div>
            </div>)
    }
}
