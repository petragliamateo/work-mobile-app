import React, {useState} from 'react';
import {Text, Pressable, Image} from 'native-base';
import playFill from '../icons/play-fill.png';

const StartButton = () => {
  const [loading, setLoading] = useState(false);
  const handlePress = () => {
    setLoading(prev => !prev);
  };
  return (
    <Pressable
      bg="red.500"
      onPress={handlePress}
      w="40"
      h="40"
      alignSelf="center"
      alignItems="center"
      justifyContent="center"
      rounded="full">
      {loading ? (
        <Image source={playFill} alt="loading" />
      ) : (
        <Text>Values/Time</Text>
      )}
    </Pressable>
  );
};
export default StartButton;
