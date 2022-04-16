import * as React from 'react';
import { Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from "./src/screen/BooksScreen";
import AuthorsScreen from './src/screen/AuthorsScreen';
import HomeScreen from './src/screen/HomeScreen';
import LogoTitle from './src/screen/LogoTitle';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: (props) => <LogoTitle {...props} onPress={() => navigation.goBack()}/>,
            title: 'My Home',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#04B4AE"
              />
            ),
          }}
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

