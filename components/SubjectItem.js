import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from "react-native";
import {  } from 'react-native-gesture-handler';

class SubjectItem extends Component {
    render() {
        let button = <Button onPress={() => this.props.onClick()} title={this.props.name} />

        return (
            <TouchableOpacity>
                {button}
            </TouchableOpacity>
        );
    }
}

export default SubjectItem;