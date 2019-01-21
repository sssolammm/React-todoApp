/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TextInput,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Aquí va tu texto..."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#00FF00',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
