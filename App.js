import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Start from './src/screens/Start';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Start />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
