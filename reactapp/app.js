import React from 'react'
import NavLink from './Pages/navLink'

export default React.createClass({
    render() {
        return (
            <div>
            <h1>Tic Tac game example</h1>
            <ul role="nav">
                <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            {this.props.children}
    </div>
    )
    }
})