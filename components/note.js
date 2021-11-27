import React, { Component } from "react";
import { Text, View, Button } from "react-native";


export default class Note extends Component {
    state = {text: this.props.inputText}

    render() {
        return (
            <View> 
                <View>
                    <Text>{this.state.text}</Text>
                </View>
                <Button
                onPress={() => this.props.onDelete(this.props.id)}
                title="DELETE!"
                >
                </Button>
            </View>
        );
    }
}

