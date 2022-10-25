import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

const Start = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  return (
    <View style={{height}}>
      <Navbar />
      <Main />
    </View>
  );
};

export default Start;
