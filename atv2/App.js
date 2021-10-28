import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Components/Cabecalho';
import Corpo from './Components/Corpo';
import Disciplina from './Components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome='Jôananda Ketlen' curso='Design Digital'/>
      <Corpo />
      <Text style={{fontWeight: 'bold'}}>Disciplinas Matriculadas:</Text>
      <Disciplina disciplina='Marketing'/>
      <Disciplina disciplina='Projeto de Interface para Dispositivos Móveis'/>
      <Disciplina disciplina='Projeto Integrado 4'/>
      <Disciplina disciplina='Concepção e Desenvolvimento de Produto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});