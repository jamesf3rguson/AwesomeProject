import React, { Component } from 'react';
import { Image, StatusBar, TouchableHighlight, Alert, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You pressed the button!')
  }

  render() {
    return (
      <Image source={require('./img/baselinegrid.png')} style={styles.container}>
      <StatusBar hidden />
        <Text style={styles.textXXL}>XXL Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
        <Text style={styles.textXL}>XL Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
        <Text style={styles.textL}>L Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
        <Text style={styles.textBASE}>BASE Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
        <Text style={styles.textSM}>SM Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
        <Text style={styles.textXS}>XS Lorem ipsum dolor sizzle amizzle, you son of a bizzle adipiscing dawg.</Text>
          <TouchableHighlight onPress={this._onPressButton} style={styles.button} underlayColor={'#00A85D'} activeOpacity={100}>
            <Text style={styles.buttonText}>Press grapes</Text>
          </TouchableHighlight>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
    width: null,
    height: null,
  },
  button: {
    backgroundColor: '#00D775',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '900',
    letterSpacing: 0,
    color: 'white',
  },
  textXXL: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  textXL: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  textL: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: -0.08,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  textBASE: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: 0,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  textSM: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
    letterSpacing: -0.2,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
  textXS: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '600',
    letterSpacing: -0.06,
    marginBottom: 32,
    marginTop: 0,
    padding: 0,
    backgroundColor: 'transparent',
  },
});
