import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';


import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

const items = [
  { name: 'Eggs', amount: '2.99' },
  { name: 'Bacon', amount: '6.23' },
  { name: 'Grits', amount: '1.99' },
  { name: 'Sausage', amount: '12.37' },
  { name: 'Magazine', amount: '9.89' },
  { name: 'Pillow', amount: '19.99' },
  { name: 'Diapers', amount: '29.23' },
];

import vendorLogos from './vendorLogos';
const defaultLogo = require('../../assets/appDefault.png');

function getImage(item){
    const uri = vendorLogos(item)();
    return uri
        ? { uri }
        : defaultLogo;
}

function Popup({ modalVisible, selectedItem, setModalVisible }){
    if(!modalVisible){
      return null;
    }
    return (
      <Modal
        backdropOpacity={0.5}
        isVisible={modalVisible}
      >
        <Card style={{paddingTop: 0, height: '98%'}}>
          { !selectedItem
            ? <View><Text>No Item Selected</Text></View>
            : <CardItem cardBody style={{
              justifyContent: 'space-between', flexDirection: 'column',
              height: '100%', width: '100%',
            }}>
                {/* <CardItem header style={styles.header}>
                  <Text style={{ color: 'white' }}>{selectedItem.name}</Text>
                </CardItem> */}
                <CardItem style={{ flexDirection: 'column'}}>
                    <Thumbnail scaleX={1.3} scaleY={1.3}
                      source={getImage(selectedItem.name)}
                      style={{marginTop: 20, marginBottom: 10}}
                    />
                    <Text style={{fontSize: 25}}>{selectedItem.name}</Text>
                    <Text note style={{fontSize: 40}}>
                      ${items.reduce((all, one)=>all+Number(one.amount), 0).toFixed(2)}
                    </Text>
                    <Text>08/16/2018 12:03pm</Text>
                </CardItem>
                <List dataArray={items} style={{padding: 0, margin: 0, width: '100%'}} renderRow={
                    (item) =>
                      <ListItem style={{marginLeft: 20, marginRight: 20,
                        justifyContent: 'space-between', padding: 5
                      }}>
                        <Text>{item.name}</Text>
                        <Text>${item.amount}</Text>
                      </ListItem>
                }/>
                <Button style={{alignSelf: 'center', marginBottom: 20, marginTop: 20, backgroundColor: '#62bc26' }} onPress={() => {
                  setModalVisible(!modalVisible, selectedItem)
                }}>
                    <Text>OKAY</Text>
                </Button>
              </CardItem>
          }
        </Card>
      </Modal>
    );
  }

const styles = StyleSheet.create({
    header: {
      width: '100%',
      marginTop: 0,
      marginBottom: 'auto',
      backgroundColor: '#62bc26'
    }
});

  module.exports = Popup;