import React from 'react'
import NavLink from './Pages/navLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Tic Tac game example</h1>
                <div className="menuCont clearfix ">
                    <ul>
                        <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
                <div className="mainCont">
                {this.props.children}
                </div>
            </div>
    )
    }
})