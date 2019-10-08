import React from 'react';
import {  StyleSheet, View } from 'react-native';

export default function ProposeScreen() {


  return (
    <View style={styles.container}>

    </View>
  );
}

ProposeScreen.navigationOptions = {
  title: 'Questionnaire - ',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'lightyellow',
  },
});
