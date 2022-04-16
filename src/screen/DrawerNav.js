import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import BooksScreen from "./BooksScreen";
import AuthorsScreen from './AuthorsScreen';
import MainScreen from './MainScreen';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (

      <Drawer.Navigator initialRouteName="My Library" options={{headerShown: false}}>
        <Drawer.Screen name="My Library" component={MainScreen} />
        <Drawer.Screen name="My Books" component={BooksScreen} />
        <Drawer.Screen name="The Authors" component={AuthorsScreen} />
      </Drawer.Navigator>

  );
}

export default DrawerNav;
