import React from 'react';
import {View, useWindowDimensions} from 'react-native';

const Home = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  return <View style={{height}} />;
};

export default Home;
