// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/screens/Home';
import { Settings } from './src/screens/Settings.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BorrowDashboard } from './src/screens/BorrowDashboard';
import { enableScreens } from 'react-native-screens';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RemindersScreen } from './src/screens/RemindersScreen.tsx';
import { ReturnDashboard } from './src/screens/ReturnDashboard.tsx';

enableScreens();

function App() {

  const Stack = createNativeStackNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BorrowDashboard" component={BorrowDashboard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="RemindersScreen" component={RemindersScreen} />
        <Stack.Screen name="ReturnDashboard" component={ReturnDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;