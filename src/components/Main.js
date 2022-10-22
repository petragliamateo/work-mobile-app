import React from 'react';
import {Text, View} from 'native-base';
import StartButton from './StartButton';

const Main = () => {
  return (
    <View bg="coolGray.700" px="10" h="full" justifyContent="space-around">
      <Text alignSelf="center" fontSize="2xl" color="blue.200">
        Nombre del ejercicio
      </Text>
      <StartButton />
      <Text alignSelf="center" fontSize="xl" color="blue.200">
        Fin
      </Text>
    </View>
  );
};
export default Main;
