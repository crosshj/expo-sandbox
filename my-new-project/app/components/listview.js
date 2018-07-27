import React from 'react';
import { StyleSheet, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Expo, { Asset, AppLoading } from 'expo';

import Modal from "react-native-modal";

import {
  Spinner, Text, View, Content, Container, Header, Title, Button, Icon,
  InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem,
  H3, Left, Right, Body, Footer, FooterTab
} from 'native-base';

function ListView({ items, setModalVisible, popup}){
    return (
        <Content>
            <List dataArray={items} style={{padding: 10, width: '100%'}} renderRow={
                (item) =>
                <TouchableOpacity onPress={()=>setModalVisible(true, item)}>
                    <Card style={{padding: 10, height: 100, flexDirection: 'row'}}>
                        <CardItem cardBody
                            style={{ marginTop: 'auto', marginBottom: 'auto', flex: 1 }}
                            onPress={()=>setModalVisible(true, item)}
                        >
                            <Thumbnail square scaleX={1.1} scaleY={1.1}
                            source={require('../../assets/appDefault.png')}
                            style={{ marginLeft: 5 }}
                            />
                        </CardItem>
                        <CardItem cardBody style={{
                            marginTop: 'auto', marginBottom: 'auto', marginLeft: 0, flex: 1,
                            flexDirection: 'column', flexGrow: 2
                        }}>
                            <Text style={{ marginLeft: 0, marginRight: 'auto', marginTop: 0,
                            marginBottom: 10
                            }}>
                            <Text style={{fontWeight: '600'}}>
                                {item.name}
                            </Text>
                            </Text>
                            <Text style={{color:'#007594', marginLeft: 0, marginRight: 'auto'}}>
                            <Text>{`${item.score} item${item.score > 1 ? 's' : ''}, `}</Text>
                            {`${item.score} hour${item.score > 1 ? 's' : ''} ago`}
                            </Text>
                        </CardItem>
                        <CardItem cardBody style={{ marginTop: 'auto', marginBottom: 'auto',
                            flex: 1
                        }}>
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
            { popup() }
        </Content>
    );
}

module.exports = ListView;
