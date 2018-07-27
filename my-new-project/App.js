import React from 'react';
//import { StyleSheet, /*Text, View*/ } from 'react-native';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';


const delay = (shouldReject, timeout = 2000) =>
  new Promise((res, rej) =>
    setTimeout(shouldReject ? rej : res, timeout));

const vendorNames = [
  'Goodwill', 'Game Stop', 'Jollibee', 'Red Ribbon', 'BonChon', 'KFC', 'Hibachi',
  'Dollar Tree', 'Star City', 'Thai House', 'Manila Mart', 'Mellow Mushroom', 'Shakeys', 'Goldilocks'
];

function Popup({ modalVisible, selectedItem, setModalVisible }){
  if(!modalVisible){
    return null;
  }
  return (
    <Modal
      backdropOpacity={0.5}
      isVisible={modalVisible}
    >
      <Card style={{paddingTop: 20, height: '95%'}}>
        { !selectedItem
          ? <View><Text>No Item Selected</Text></View>
          : <CardItem cardBody style={{
            justifyContent: 'space-between', flexDirection: 'column',
            height: '100%', width: '100%'
          }}>
              {/* <Image style={styles.modalImage} source={{uri: this.state.selectedItem.owner.avatar_url}}  /> */}
              <CardItem header bordered style={{ width: '100%'}}>
                <Text>{selectedItem.name}</Text>
              </CardItem>
              <Text>
                  transaction details go here
              </Text>
              <Button danger style={{alignSelf: 'center', marginBottom: 20 }} onPress={() => {
                setModalVisible(!modalVisible, selectedItem)
              }}>
                  <Text>
                    Go Back
                  </Text>
              </Button>
            </CardItem>
        }
      </Card>
    </Modal>
  );
}

function mapNameToAssetLocation(name){
  var location = undefined;
  switch (name) {
    case 'Jollibee': {
      location = require('./assets/Jollibee.png');
      break;
    }
    case 'Goodwill': {
      location = require('./assets/Goodwill.png');
      break;
    }
    case 'Game Stop': {
      location = require('./assets/gamestop-logo.png');
      break;
    }
    case 'Red Ribbon': {
      location = require('./assets/red-ribbon-logo.png');
      break;
    }
    case 'BonChon': {
      location = require('./assets/th.jpg');
      break;
    }
    case 'KFC': {
      location = require('./assets/KFC.png');
      break;
    }
    case 'Hibachi': {
      location = require('./assets/Hibachi.png');
      break;
    }
    case 'Dollar Tree': {
      location = require('./assets/dtree.jpg');
      break;
    }
    case 'Star City': {
      location = require('./assets/star.jpg');
      break;
    }
    case 'Thai House': {
      location = require('./assets/thai.png');
      break;
    }
    case 'Manila Mart': {
      location = require('./assets/manila.png');
      break;
    }
    case 'Mellow Mushroom': {
      location = require('./assets/mellow.jpg');
      break;
    }
    case 'Shakeys': {
      location = require('./assets/shakeys.jpg');
      break;
    }
    case 'Goldilocks': {
      location = require('./assets/gold.jpg');
      break;
    }
    default: {
      location = require('./assets/appDefault.png');
      break;
    }
  }
  return location;
}

export default class App extends React.Component {
  state = {
    isReady: false,
    modalVisible: false,
    selectedItem: undefined,
    items: (() => vendorNames
      .map((x, i) => ({
        name: x,
        full_name: 'Foo Bar',
        score: i+1
      }))
    )()
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    await this._cacheResourcesAsync();
    this.setState({ isReady: true });
  }

  setModalVisible(visible, x) {
    this.setState({
        modalVisible: visible,
        selectedItem: x
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading />
      );
    }
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Ledjr</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
        <Content>
        <List dataArray={this.state.items}  style={{padding: 10, width: '100%'}} renderRow={
          (item) =>
            <TouchableOpacity onPress={()=>this.setModalVisible(true, item)}>
              <Card button style={{padding: 10, height: 100, flexDirection: 'row'}}>
                <CardItem button cardBody
                  style={{ marginTop: 'auto', marginBottom: 'auto', flex: 1 }}
                  onPress={()=>this.setModalVisible(true, item)}
                >
                  <Thumbnail square scaleX={1.1} scaleY={1.1}
                    source={mapNameToAssetLocation(item.name)}
                    style={{ marginLeft: 5 }}
                  />
                </CardItem>
                <CardItem cardBody style={{
                  marginTop: 'auto', marginBottom: 'auto', marginLeft: 0, flex: 1, flexDirection: 'column', flexGrow: 2
                }}>
                  <Text style={{ marginLeft: 0, marginRight: 'auto', marginTop: 0, marginBottom: 10 }}>
                    <Text style={{fontWeight: '600'}}>
                      {item.name}
                    </Text>
                  </Text>
                  <Text style={{color:'#007594', marginLeft: 0, marginRight: 'auto'}}>
                    <Text>{`${item.score} item${item.score > 1 ? 's' : ''}, `}</Text>
                    {`${item.score} hour${item.score > 1 ? 's' : ''} ago`}
                  </Text>
                </CardItem>
                <CardItem cardBody style={{ marginTop: 'auto', marginBottom: 'auto', flex: 1 }}>
                  <Text note style={{ marginRight: 10, marginLeft: 'auto'}}>
                    <Text note style={{fontSize: 25}}>
                      ${item.score}.00
                    </Text>
                  </Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          }
        />

        <Popup {...{
          modalVisible: this.state.modalVisible,
          selectedItem: this.state.selectedItem,
          setModalVisible: this.setModalVisible.bind(this)
        }} />

        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button full>
              <Text style={styles.footerText}>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('./assets/icon.png'),
      require('./assets/splash.png'),
      require('./assets/appDefault.png'),
      require('./assets/Jollibee.png'),
      require('./assets/Goodwill.png'),
      require('./assets/gamestop-logo.png'),
      require('./assets/red-ribbon-logo.png'),
      require('./assets/th.jpg'),
      require('./assets/KFC.png'),
      require('./assets/Hibachi.png'),
      require('./assets/dtree.jpg'),
      require('./assets/star.jpg'),
      require('./assets/thai.png'),
      require('./assets/manila.png'),
      require('./assets/mellow.jpg'),
      require('./assets/shakeys.jpg'),
      require('./assets/gold.jpg'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all([ delay(false, 100), ...cacheImages ])
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#62bc26',
  },
  container: {
    flex: 1,
    ...Platform.select({
        android: {
            marginTop: StatusBar.currentHeight
        }
    })
  },
  footer: {
    backgroundColor: '#eee'
  },
  footerText: {
    color: "#333"
  },
  modalImage: {
    resizeMode: 'contain',
    height: 200
  },
  bold: {
      fontWeight: '600'
  },
  negativeMargin: {
      marginBottom: -10
  }
});
