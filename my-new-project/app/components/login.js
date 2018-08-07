import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

function Login(){

    return (
      <Modal>
          <Text>Ledjr</Text>
          <Text>Username</Text>
          <Text>Password</Text>
          <Text>Sign In</Text>
          <Text>Create an account</Text>
      </Modal>
    );
}

module.exports = Login;