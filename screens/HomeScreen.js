import React, { Component } from 'react';
import { Image, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import SubjectItem from '../components/SubjectItem.js';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            name: '',
            page: 1,
        };
    }

    componentDidMount() {
        this.fetchSubjects();
    }

    fetchSubjects() {
        console.log(process.env.API_URL)
        /*
        fetch(process.env.API_URL + '/subjects' + this.props.id)
            .then(response => response.json())
            .then(data => this.setState({ subjects: data.subjects }))
            .catch(err => console.log(err))
        */
        this.setState({ subjects: {"count":3,"limit":10,"subjects":[{"_id":"5d935f7f90a20304cfcb5156","name":"HTML","questions":[{"description":"Que veut dire HTML ?","answers":[{"choice":"hypertext marking language","isValid":true},{"choice":"bonjour en dialecte wookie","isValid":false},{"choice":"ha ta ma la","isValid":false},{"choice":"home text made low","isValid":false}]},{"description":"A quoi sert le HTML ?","answers":[{"choice":"planter des choux","isValid":false},{"choice":"manger des pommes","isValid":false},{"choice":"écrire un site web","isValid":true},{"choice":"rencontrer Obi Wan Kenobi","isValid":false}]}]},{"_id":"5d945b7c00d0100247c6780a","name":"PHP","questions":[{"description":"Que veut dire PHP ?","answers":[{"choice":"papa hé papa","isValid":false},{"choice":"hypertext preprocessor","isValid":true},{"choice":"pop hop pop","isValid":false},{"choice":"Obi Wan Kenobi","isValid":false}]},{"description":"A quoi sert le PHP ?","answers":[{"choice":"cueillir des navets","isValid":false},{"choice":"faire la sieste","isValid":false},{"choice":"programmer un site web","isValid":true},{"choice":"détruire l'étoile noire","isValid":false}]}]},{"_id":"5d945d3e00d0100247c6780b","name":"JavaScript","questions":[{"description":"Qui a inventé le JavaScript ?","answers":[{"choice":"Dark Vador","isValid":false},{"choice":"Brendan Eich","isValid":true},{"choice":"Bill Gates","isValid":false},{"choice":"Pierre Jehan","isValid":false}]},{"description":"A quoi sert le JavaScript ?","answers":[{"choice":"respirer sous l'eau","isValid":false},{"choice":"parler Indonésien","isValid":false},{"choice":"dynamiser un site web","isValid":true},{"choice":"maîtriser la force","isValid":false}]}]}]} })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/quiz-time.png')} style={{ alignSelf: 'center' }} />
                <Text style={{ fontWeight: "bold", alignSelf: "center" }}>Tous les questionnaires : </Text>
                <ScrollView>
                    <FlatList data={this.state.subjects}
                        renderItem={({ item }) => <SubjectItem name={item.name} />}
                        keyExtractor={(item, index) => index.toString()} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
});

export default HomeScreen;