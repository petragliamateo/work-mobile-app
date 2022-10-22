import React from 'react';
import {Box, Text, Avatar, ScrollView} from 'native-base';
import playFill from '../icons/play-fill.png';

const Header = () => {
  return (
    <ScrollView bg="coolGray.700" p="10" h="full">
      <Avatar source={playFill} bg="red.500" alignSelf="center" size="2xl" />
    </ScrollView>
  );
};
export default Header;
