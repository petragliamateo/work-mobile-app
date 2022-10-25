import {Text} from 'native-base';
import React from 'react';
import {View, useWindowDimensions} from 'react-native';

const Home = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  return (
    <View style={{height}}>
      <Text>Hola!</Text>
      <Text>Explorar Rutinas</Text>
      <Text>Crear Rutinas</Text>
      <Text>Cronometro</Text>
      <Text>Indicar peso</Text>
      <Text>Tu progresión</Text>
    </View>
  );
};

export default Home;
