import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterMenuScreen from './screens/FilterMenuScreen';


// Define stack navigator
const Stack = createStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen name="Home">
          {(props: any) => (
            <HomeScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />
          )}
        </Stack.Screen>
        
        {/* Add Menu Screen */}
        <Stack.Screen name="AddMenu">
          {(props: any) => (
            <AddMenuScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />
          )}
        </Stack.Screen>
        
        {/* Filter Menu Screen */}
        <Stack.Screen name="FilterMenu">
          {(props: any) => <FilterMenuScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
