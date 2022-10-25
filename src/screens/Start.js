import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Main from '../components/Main';

const Start = () => {
  let {height} = useWindowDimensions();
  height -= 60;
  return (
    <View style={{height}}>
      <Main />
    </View>
  );
};

export default Start;
