import React from 'react';

import SearchBar from '../components/searchbar'
import { 
    Container, Header, Item, Input, Icon, Button, Text
} from 'native-base';

class FirstPage extends React.Component {
    render(){
        return (
            <Container
                style={{
                paddingTop: 23
                }}
            >
                <SearchBar />
                 <Text>
                     Hello - THERE
                 </Text>
            </Container>
        );
    }
}

export default FirstPage;

