import alt from '../../alt';

class HomeActions {
    updateState(state) {
        return { state }
    }
    reset() {
        return {}
    }
}

export default alt.createActions(HomeActions);