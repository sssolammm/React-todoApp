/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={this.props.tareas}
          renderItem={ ({item}) => <Tarea item={item} eliminar={this.props.eliminar }/> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98FB98',
  },
});