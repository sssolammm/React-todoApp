import React from 'react';
import { StyleSheet, View, AsyncStorage, Button } from 'react-native';
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
      cargando: true,
    };
  }

  componentDidMount(){
    //Funcion para cargar cosas de BBDD se ejecuta despues del constructor y solo se ejecuta una vez
    this.cargarBBDD();
  }

  establecerTexto = (value) => {
    this.setState({ texto: value });
  };

  agregarTarea = () => {
    const nuevasTareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];
    this.guardarBBDD(nuevasTareas);
    this.setState({
      // tareas: [...this.state.tareas, this.state.texto], // Antigua versión
      // el valor se transforma sincronamente
      tareas: nuevasTareas,
      texto: '',
    });
    this.cargarBBDD();
  };

  eliminarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter((tarea) => {
      return tarea.key !== id;
    })
    this.guardarBBDD(nuevasTareas);
    this.setState({
      tareas: nuevasTareas,
    });
    this.cargarBBDD();
  }

  guardarBBDD = (tareas) => { 
    AsyncStorage.setItem('@AppToDo:tareas', JSON.stringify(tareas))
      .then((valor) => {
        console.log(valor);
        const nuevasTareas = JSON.parse(valor);
        this.setState({
          tareas: nuevasTareas,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  cargarBBDD = () => {
    this.setState({
      cargando: true,
    })
    AsyncStorage.getItem('@AppToDo:tareas')
      .then((valor) => {
        console.log(JSON.parse(valor));
        //Crear timeout en la APP de 2 segundos
        setTimeout(() => {
          this.setState({
            cargando: false,
          })
        }, 2000)
        if (valor !== null){
          const nuevasTareas = JSON.parse(valor);
          this.setState({
            tareas: nuevasTareas,
          })
        }

      })
      .catch((error) => {
        console.log(error);
        this.setState({
          cargando: false,
        })
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
        <Button title='Guardar'
          onPress={() => {
            this.guardarBBDD();
          }}
        />
        <Button title='Cargar'
          onPress={() => {
            this.cargarBBDD();
          }}
        />

        <Body tareas={this.state.tareas} cargando={this.state.cargando} eliminar={this.eliminarTarea} />
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
