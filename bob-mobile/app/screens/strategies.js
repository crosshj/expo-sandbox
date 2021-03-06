import React from 'react';

import {
    AsyncStorage, StyleSheet, Image, Platform, StatusBar, TouchableOpacity
} from 'react-native';

import {
    Container, List, ListItem, Title, Left, Icon, Right, Button, Body, Content,
    Text, Card, CardItem, View, Spinner, Accordion
} from "native-base";

import Header from '../components/header';
import { Subscribe } from 'unstated';

import strategiesStateContainer from '../state/strategiesStateContainer';

import Loading from '../components/loading';

class Strategies extends React.Component {

    render() {
        const { navigation, strategies, error, loading } = this.props;

        const Screen = ({children}) => (
            <Container style={styles.container}>
                <Header
                    navigation={navigation}
                    title={'Strategies'}
                    hideSearch={true}
                />
                {children}
            </Container>
        );

        // TODO: make middleware/HOC (?) for this
        if(error){
            return (
                <Screen>
                    <View>
                        <Text>
                            {error}
                        </Text>
                    </View>
                </Screen>
            );
        }


        // TODO: make middleware/HOC (?) for this
        if(loading){
            return (
                <Screen>
                    <Loading />
                </Screen>
            );
        }

        const cardHeader = ({ title }, expanded) => {
            // WORKAROUND for problem with Accordian and last item
            if (title === 'spacer') {
                return <View style={{ height: 40 }}></View>;
            }
            return (
                <View
                    style={expanded
                        ? [styles.card, styles.cardHeader, styles.cardHeaderOpen]
                        : [styles.card, styles.cardHeader, styles.cardHeaderClosed]
                    }
                >
                    <Text style={{ fontWeight: "600" }}>
                        {" "}{title}
                    </Text>
                    {expanded
                        ? <Icon style={styles.cardIcon} name="ios-arrow-up" />
                        : <Icon style={styles.cardIcon} name="ios-arrow-down" />
                    }
                </View>
            );
        }

        const cardContent = ({ title, content }) => {
            // WORKAROUND for problem with Accordian and last item
            if (title === 'spacer') {
                return undefined;
            }
            // WORKAROUND END

            const formatPercentage = fn => {
                try {
                    return `${Number(fn()).toFixed(3)}%`;
                } catch (e) {
                    return '---';
                }
            };
            const Stat = ({ period, amount}) => (
                <View>
                    <Text>{period}</Text>
                    <Text
                        style={{
                            color: amount >= 0 ? 'green' : 'red'
                        }}
                    >{formatPercentage(() => amount)}</Text>
                </View>
            );
            return (
                <View
                    style={[styles.card, styles.cardContent]}
                >
                    <Text>
                        {" "}{content.Tickers.join(', ')}
                    </Text>
                    <View style={styles.statsContainer}>
                        <Stat period={"WTD"} amount={content.Statistics.WeekToDate} />
                        <Stat period={"MTD"} amount={content.Statistics.MonthToDate} />
                        <Stat period={"YTD"} amount={content.Statistics.YearToDate} />
                    </View>
                </View>

            );
        };

        const CardView = () => (
            <Content contentContainerStyle={styles.cardView}>
                <Accordion
                    expanded={0}
                    dataArray={strategies}
                    renderHeader={cardHeader}
                    renderContent={cardContent}
                    style={styles.cardList}
                />
            </Content>
        );

        return (
            <Screen>
                <CardView />
            </Screen>
        );
    }
}

export default strategiesStateWrapper = (props) => (
    <Subscribe to={[strategiesStateContainer]}>
        {({ state }) => (
            <Strategies
                {...props}
                strategies={state.strategies}
                loading={state.loading}
                error={state.error}
            />
        )}
    </Subscribe>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardView: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    cardList: {
        borderWidth: 0,
        paddingTop: 15,
        paddingBottom: 10
    },
    card: {
        borderColor: '#ccc', //TODO: theme colors
        borderBottomWidth: 1.5,
        marginLeft: 15,
        marginRight: 15,
    },
    cardIcon: {
        fontSize: 24,
        color: '#aaa' //TODO: theme colors
    },
    cardHeader: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 10,
    },
    cardHeaderOpen: {
        borderBottomWidth: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 0,
        paddingBottom: 0,
    },
    cardHeaderClosed: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    cardContent: {
        padding: 10,
        paddingTop: 0,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    statsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingLeft: 5,
        paddingRight: 5,
    }
});


//import WebView from '../components/niceWebview';

//const uri = 'http://192.168.1.95:3000/mobileChart/';
//const uri = 'https://test.letbob.com/chartiq/chart.html#AAPL';

/*

would be nice to change orientaion (and react accordingly) on the fly...

https://docs.expo.io/versions/latest/sdk/screen-orientation.html

*/


/*
    <View style={ styles.cardView }>
        <TouchableOpacity
            style={styles.webviewContainer}
            onPress={() => { navigation.navigate('Landscape') }}
        >
            <WebView
                source={{uri}}
                onMessage={(event)=> console.log(event.nativeEvent.data)}
            />
        </TouchableOpacity>
        <Text>Click for full screen.</Text>
    </View>
*/

/*
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        cardView: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        webviewContainer: {
            paddingTop: 20,
            height: 300,
            width: '95%'
        }
    });
*/
