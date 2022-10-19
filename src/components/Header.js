import React from 'react';
import {Box, Text, Avatar} from 'native-base';
import playFill from '../icons/play-fill.png';

const Header = () => {
  return (
    <Box bg="coolGray.800" p="10">
      <Avatar source={playFill} bg="red.500" alignSelf="center" size="2xl" />
    </Box>
  );
};
export default Header;
