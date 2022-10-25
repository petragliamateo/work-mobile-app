import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import {NativeBaseProvider, ScrollView} from 'native-base';
import Start from './src/screens/Start';
import Home from './src/screens/Home';
import colors from './src/data/colors.json';
import DataContext from './src/contexts/DataContext';
import Navbar from './src/components/Navbar';
import BottomNavigation from './src/components/BottomNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const show = 'home';
  const data = {colors: colors.main};
  let {height} = useWindowDimensions();
  height -= 75;

  return (
    <NativeBaseProvider>
      <DataContext.Provider value={data}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navbar />
          <ScrollView height={height}>
            {show === 'start' && <Start />}
            {show === 'home' && <Home />}
          </ScrollView>
          <BottomNavigation />
        </SafeAreaView>
      </DataContext.Provider>
    </NativeBaseProvider>
  );
};

export default App;
