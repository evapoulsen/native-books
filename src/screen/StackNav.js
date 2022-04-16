import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from './BooksScreen';
import AuthorsScreen from './AuthorsScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
      <Stack.Navigator>
      <Stack.Screen
          name="My Library"
          component={MainScreen}
          options={({ route }) => ({ title: route.params.name })}
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
  )
}

export default StackNav;

