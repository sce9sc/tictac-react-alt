import React from 'react'

var Menu = React.createClass({
    render: function() {
        return <div id='menu'>
            <h3 className={this.props.winner === 'n' ? 'visible' : 'hidden'}>Player {this.props.turn}'s turn.</h3>
            <h3 className={(this.props.winner === 'n') || (this.props.winner === 'd') ? 'hidden' : 'visible'}>Player {this.props.winner} won!</h3>
            <h3 className={this.props.winner === 'd' ? 'visible' : 'hidden'}>Draw Game :(</h3>
            <button onClick={this.props.resetAction}>Reset Game</button>
        </div>;
    }
});

module.exports = Menu;