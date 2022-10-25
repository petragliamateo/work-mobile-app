import {Text, View} from 'native-base';
import React, {useContext} from 'react';
import {useWindowDimensions} from 'react-native';
import SlideBar from '../components/SlideBar';
import DataContext from '../contexts/DataContext';

const Home = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  const {colors} = useContext(DataContext);
  return (
    <View style={{height}} bg={colors[3]}>
      <SlideBar />
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
