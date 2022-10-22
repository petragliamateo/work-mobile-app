import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Header from '../components/Main';
import Navbar from '../components/Navbar';

const Start = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  return (
    <View style={{height}}>
      <Navbar />
      <Header />
    </View>
  );
};

export default Start;
