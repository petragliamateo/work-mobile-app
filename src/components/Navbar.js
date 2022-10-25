import React, {useContext} from 'react';
import {Box, Text} from 'native-base';
import DataContext from '../contexts/DataContext';

const Navbar = () => {
  const {colors} = useContext(DataContext);
  return (
    <Box px={5} py={2} bgColor={colors[1]}>
      <Text fontSize={24}>WinU</Text>
    </Box>
  );
};
export default Navbar;
