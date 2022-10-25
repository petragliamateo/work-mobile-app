import React, {useContext} from 'react';
import {View, Text, Image, Pressable} from 'native-base';
import DataContext from '../contexts/DataContext';
import {StyleSheet} from 'react-native';
import houseFill from '../icons/house-door-fill.png';
import house from '../icons/house-door.png';
import start from '../icons/play-fill.png';

const BottomNavigation = ({setShow}) => {
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
      <Pressable onPress={() => setShow('home')}>
        <Image alt="house" source={house} style={styles.image} />
      </Pressable>
      <Pressable onPress={() => setShow('start')}>
        <Image alt="start" source={start} style={styles.image} />
      </Pressable>
    </View>
  );
};

export default BottomNavigation;
