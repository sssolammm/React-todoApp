import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
        <TouchableOpacity onPress={ () => {this.props.eliminar(this.props.item.key)} }>
          <Ionicons
            name = "md-trash"
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 16,
      //Este elemento ordena segun la direcció del flex direction en este caso row
      justifyContent: 'space-between'
    },
    texto: {
      paddingHorizontal: 16,
      fontSize: 24,
    },
  });
