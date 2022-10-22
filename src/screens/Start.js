import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Start = () => {
  let {height} = useWindowDimensions();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{height}}>
      <Navbar />
      <Header />
    </ScrollView>
  );
};

export default Start;
