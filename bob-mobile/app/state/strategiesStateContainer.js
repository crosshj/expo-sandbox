import { Container } from 'unstated';

const fakeStrats = [{
    title: 'AAPL',
    content: 'foo'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'DAPL',
    content: 'fee'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL',
    content: 'fi'
}, {
    title: 'RAPL-last',
    content: 'fi'
}, {
    title: 'spacer',
    content: ''
}];

class StrategiesStateContainer extends Container {
    state = {
        strategies: fakeStrats || [],
        loading: false,
    };

    init = async () => {
    }
}

// because singleton
export default new StrategiesStateContainer();