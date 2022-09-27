import React from 'react';
import { SafeAreaView } from 'react-native';
import { Titulo, Formulario } from './src/components'

const App = () => {

  return (
    <SafeAreaView>
      <Titulo principal="Cadastro" />
      <Formulario />
    </SafeAreaView>
  );
};

export default App;