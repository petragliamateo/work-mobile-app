import React from 'react';
import {Text, Avatar, View} from 'native-base';
import playFill from '../icons/play-fill.png';

const Main = () => {
  return (
    <View bg="coolGray.700" px="10" h="full" justifyContent="space-around">
      <Text alignSelf="center" fontSize="2xl" color="blue.200">
        Nombre del ejercicio
      </Text>
      <Avatar source={playFill} bg="red.500" alignSelf="center" size="2xl" />
      <Text alignSelf="center" fontSize="xl" color="blue.200">
        Fin
      </Text>
    </View>
  );
};
export default Main;
