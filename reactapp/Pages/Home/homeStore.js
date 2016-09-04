import alt from '../../alt';
import HomeActions from './homeActions'

class HomeStore {
    constructor() {
        this.bindListeners({
            updateState: HomeActions.updateState,
            reset: HomeActions.reset
        });

        this.state = {
            tiles:['','','',
                      '','','',
                      '','','',
                     ],
                     turn:'o',
                     winner: 'n'
        };

    }

    updateState(newstate) {
        this.setState({ tiles: newstate.state.tiles,turn:newstate.state.turn,winner:newstate.state.winner });
    }
    reset(tiles) {
        this.setState({
            tiles:['','','',
                '','','',
                '','','',
            ],
            turn:'o',
            winner: 'n'
        })
    }
}

export default alt.createStore(HomeStore, 'HomeStore');