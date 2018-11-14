import { Container } from 'unstated';

export default class GlobalStateContainer extends Container {
    state = {
        isReady: true,
        isLoggedIn: true,
        modalVisible: false,
        count: 0,
        settings: {
            'Share anonymous usage data': false,
            'Update social media': false,
            'Track spending': true,
            'Protect private data': true,
            'Use internal browser': false,
            'Encrypt connection': true
        }
    };

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    toggleProp = (prop) => {
        this.setState(state => ({
            settings: { ...state.settings, ...{ [prop]: !this.state.settings[prop] }}
        }));
    }
}
