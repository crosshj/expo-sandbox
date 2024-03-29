import React, { Component } from 'react';
import { 
  Container, Header, Item, Input, Icon, Button, Text
} from 'native-base';

class SearchBar extends Component {
  render() {
    return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            {/* <Icon name="ios-people" /> */}
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
    );
  }
}

export default SearchBar;