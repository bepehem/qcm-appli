import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";

class ProposeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.subject ? this.props.suject.name : ''
        };
    }

    saveQcm() {
        const method = this.props.subject ? 'PUT' : 'POST';
        let url = process.env.API_URL + '/subjects';
        if (this.props.subject) {
            url += '/' + this.props.subject._id;
        }
        fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name })
        })
            .then(response => response.json())
            .then(data => {
                if (typeof this.props.onSave === 'function') {
                    this.props.onSave(data);
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.name} onChangeText={text => this.setState({ name: text })} placeholder={'Titre du questionnaire'} />
                <Button onPress={() => this.saveQcm()} title='Enregistrer' />
            </View>
        );
    }
}

ProposeScreen.navigationOptions = {
  title: 'Proposer un questionnaire',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'rosybrown',
  },
});

export default ProposeScreen;



