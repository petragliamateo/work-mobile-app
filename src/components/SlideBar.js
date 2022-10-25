import React from 'react';
import {ScrollView, Text} from 'native-base';

const SlideBar = () => {
  return (
    <ScrollView horizontal px={5} py={2}>
      <Text fontSize={24} mx="2">Expl</Text>
      <Text fontSize={24} mx="2">Run</Text>
      <Text fontSize={24} mx="2">Cicl</Text>
    </ScrollView>
  );
};
export default SlideBar;
