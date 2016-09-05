import React from 'react'
import { Component } from 'react';
import Tile from '../../PageComponents/Home/tile'
import Menu from '../../PageComponents/Home/menu'
import HomeStore from './homeStore';
import HomeActions from './homeActions';

var GameBoard  = React.createClass({

    getInitialState() {
        var storestate = HomeStore.getState();
        return storestate
    },

    componentDidMount() {
        HomeStore.listen(this.onChange);
    },

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    checkBoard() {
        var t = this.state.tiles;
        var check = function(a,b,c) {
            return !!(a + b + c).match(/^(xxx|ooo)$/gi);
        };
        if (check(t[0], t[1], t[2])) return t[0];
        if (check(t[3], t[4], t[5])) return t[3];
        if (check(t[6], t[7], t[8])) return t[6];

        if (check(t[0], t[3], t[6])) return t[0];
        if (check(t[1], t[4], t[7])) return t[1];
        if (check(t[2], t[5], t[8])) return t[2];

        if (check(t[0], t[4], t[8])) return t[0];
        if (check(t[2], t[4], t[6])) return t[2];

        if (t.join('').length === 9) return 'd';
        return 'n';
    },

    tileClick(position, player) {

        var tiles = this.state.tiles;
        //If the selected position is already filled, return to prevent it being replaced.
        if ( (tiles[position] === 'x' || tiles[position] === 'o') || (this.state.winner !== 'n') ) return;
        tiles[position] = player;

        HomeActions.updateState(
            {tiles: tiles, turn: player === 'o' ? 'x' : 'o', winner: this.checkBoard()}
        );

        //this.setState({tiles: tiles, turn: player === 'o' ? 'x' : 'o', winner: this.checkBoard()});

    },

    resetGame() {
        HomeActions.reset();
        //this.setState(this.getInitialState());
    },

    render() {
        return <div className="gameCont clearfix">
            <div id='game'>
                { this.state.tiles.map(function(tile,position){
                    return (
                        <Tile key={position} status={tile} keypos={position} turn={this.state.turn} tileClick={this.tileClick} />
                    );
                }, this) }
            </div>
            <Menu turn={this.state.turn} winner={this.state.winner} resetAction={this.resetGame} />
        </div>;
    }
}
)

module.exports = GameBoard