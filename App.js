import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';


// Instalar ESLINT
// npm install --save-dev eslint babel-eslint
// ./node_modules/.bin/eslint --init

// CURSO PRIMER VIDEO DE TODO APP SE VE COMO SE INSTALA

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    this.setState({ texto: value });
  };

  agregarTarea = () => {
    this.setState({
      // tareas: [...this.state.tareas, this.state.texto], // Antigua versión
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
  };

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter((tarea) => {
      return tarea.key !== id;
    })
    this.setState({
      tareas: nuevasTareas,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          texto={this.state.texto}
          cambiarTexto={this.establecerTexto} 
          agregar={this.agregarTarea} 
        />
        <Text>{this.state.texto}</Text>
        <Body tareas={this.state.tareas} eliminar={this.eliminarTarea} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
