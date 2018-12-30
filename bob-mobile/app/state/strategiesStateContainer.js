import { Container } from 'unstated';
import jwtDecoder from 'jwt-decode';

import {
    AsyncStorage,
} from 'react-native';

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
        strategies: [],
        loading: false,
    };

    init = async () => {
    }

    getUserStrategies = async () => {
        try {
            console.log(' ---- getUserStrategies [START]');
            this.setState(() => ({ loading : true }));

            // TODO: getting and decoding token should be modularized?

            // need token for requesting strategies
            const encodedToken = await AsyncStorage.getItem('userToken');
            if (!encodedToken) {
                throw new Error('Failed getting token from storage to request strategies');
            };

            var decodedToken = undefined;
            try {
                decodedToken = jwtDecoder(encodedToken);
            } catch (e){
                // nothing
            }
            if (!decodedToken) {
                throw new Error('Failed decoding token from storage to request strategies');
            };


            const url = 'https://test.letbob.com/v0/strategy?Private=true';
            const options = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${encodedToken}`,
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(url, options);
            const responseJson = await response.json();
            //console.log({ responseJson });

            if(!responseJson.strategies || responseJson.strategies.constructor !== Array){
                throw new Error('Failed getting a proper response from strategies endpoint');
            }

            // TODO: what id jwt is expired?

            const strategies = responseJson.strategies.map(x => ({
                title: x.strategy,
                content: x
            }));

            this.setState(() => ({ strategies, loading: false }));
            console.log(' ---- getUserStrategies [END]');
        } catch (error) {
            console.log(' ---- getUserStrategies [ERROR]: ', error);
            this.setState(() => ({ strategies: [], error: error.message, loading: false }));
        }
    }
}

// because singleton
export default new StrategiesStateContainer();