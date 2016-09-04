// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

    render() {
        return (
            <Button>
                <Link {...this.props} activeClassName="active"/>
            </Button>
            )
    }
})