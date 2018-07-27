import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';


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
                    transaction details go here - HERE
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

  module.exports = Popup;