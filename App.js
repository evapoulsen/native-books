import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from "./src/screen/BooksScreen";
import AuthorsScreen from './src/screen/AuthorsScreen';
import HomeScreen from './src/screen/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'My Home'}}
        />
        <Stack.Screen 
        name="Books" 
        component={BooksScreen}
        options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen 
        name="Authors" 
        component={AuthorsScreen}
        options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

