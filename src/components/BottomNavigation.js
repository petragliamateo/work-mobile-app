import React, {useContext} from 'react';
import {View, Text} from 'native-base';
import DataContext from '../contexts/DataContext';
import {StyleSheet} from 'react-native';

const BottomNavigation = () => {
  const {colors} = useContext(DataContext);
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 64,
      backgroundColor: colors[2],
      paddingHorizontal: 35,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 3},
      shadowRadius: 5,
      shadowOpacity: 1.0,
      elevation: 5,
    },
    image: {
      width: 30,
      height: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Text fontSize={24}>BottomNavigation</Text>
    </View>
  );
};

export default BottomNavigation;
