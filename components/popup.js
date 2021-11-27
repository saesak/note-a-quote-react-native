import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";



export default class PopUp extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
        <View style={styles.modal}>
            <View style={styles.modal_content}>                
                <Text style={styles.close} onClick={this.handleClick}>&times;</Text>
                <Text>{this.props.details}</Text>
            </View>
        </View>
        );
    }
}



const styles = StyleSheet.create({
    modal: {
        width: 100,
        height: 100,
    },
      
      modal_content: {
        backgroundColor: "white",
        top: 50,
        left: 30,
        width: 40,
        padding: 20,
        borderRadius: 5,
        borderWidth: 2,
      },
      
      close: {
        color: "black",
      }
})