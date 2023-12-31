import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/Screen1';
import ScreenChonMau from './src/Screen3';
import { DataContext, dataPhone } from './src/DataContext';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataContext.Provider value={dataPhone}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={ScreenChonMau} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
};

export default App;
