import React from 'react'


var Tile = React.createClass({
    //The method to handle when a user clicks on the tile, calls the tileClick method on the parent component that is referenced in the props object.
    clickHandler: function() {
        this.props.tileClick(this.props.keypos, this.props.turn);
    },

    render: function() {
        return <div className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status}
                    onClick={this.clickHandler}>{this.props.status}</div>;
    }
});

module.exports = Tile