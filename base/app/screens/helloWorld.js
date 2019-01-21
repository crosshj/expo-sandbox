import React from 'react';
import Header from '../components/header';

import {
    Container, Title, Left, Icon, Right, Button, Body,
    Content, Text, Card, CardItem, View, ListItem, CheckBox
} from "native-base";

class HelloWorld extends React.Component {
    render() {
        return (
            <Container>
                <Header
                    navigation={this.props.navigation}
                    title={'Hello World'}
                    hideSearch={true}
                />
                <Content
                    contentContainerStyle={{ padding: 20 }}
                >
                    <Text>Here's a simple example of how to create a screen!</Text>
                    <Text style={{ paddingTop: 10}}>
                        How about some Lorum Ipsum?
                    </Text>
                    <Text style={{ paddingTop: 10}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat ligula eu suscipit aliquet. Mauris id venenatis lacus. Donec ultricies sodales tellus, rutrum lacinia enim commodo gravida. Nulla ac tellus ac lectus mattis pellentesque eu ut nibh. Nullam in feugiat erat, sit amet luctus sem. Sed iaculis sem et finibus sagittis. Maecenas nec viverra lorem. Nulla a ultricies mauris. Fusce metus metus, pretium ut congue at, sagittis id lacus. Ut consectetur, mauris et mollis sollicitudin, est ex lobortis turpis, nec accumsan arcu justo quis eros.
                    </Text>
                    <Text style={{ paddingTop: 10}}>
                        Etiam scelerisque, lorem non rutrum tempor, lorem nisl malesuada nulla, vel commodo nibh ante at magna. Quisque dignissim dui ac vestibulum mattis. Morbi varius sed tellus id ultricies. Aliquam ac dui non ligula interdum tincidunt. Cras tristique aliquam risus vitae hendrerit. Praesent imperdiet felis a metus sagittis, hendrerit mollis nisl dictum. Morbi ullamcorper turpis vel massa finibus, ut volutpat nulla vestibulum. In facilisis commodo aliquam. Vivamus nec tortor consectetur, lacinia ipsum eu, condimentum felis. Mauris sit amet nisi eget ipsum sodales imperdiet. Donec dictum libero sed eros bibendum porttitor. Nulla quis consequat nisi, sed scelerisque augue. Curabitur eleifend porta mauris, at porta enim cursus sed.
                    </Text>
                    <Text style={{ paddingTop: 10}}>
                        Curabitur eu magna a lorem molestie volutpat. Nunc eu ultrices urna, ac gravida turpis. Pellentesque at ante vitae urna gravida tincidunt id nec diam. Duis erat metus, efficitur non diam sit amet, finibus eleifend nulla. Etiam efficitur nisl eu feugiat elementum. Etiam ac ornare tortor. Aliquam vel risus non dui suscipit fermentum. In rhoncus ornare metus eget tempor. Duis fermentum tristique tristique. Sed ut mauris tristique ante scelerisque varius sed quis nisl. Curabitur vestibulum convallis congue. Sed ornare sollicitudin felis, sed maximus nibh ornare a.
                    </Text>
                </Content>
            </Container>
        );
    }
}

export default HelloWorld;
