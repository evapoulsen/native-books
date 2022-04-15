import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from "./src/screen/BooksScreen";
import AuthorsScreen from './src/screen/AuthorsScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeStyle}>
      <Text>Home Screen</Text>
      <View style={styles.buttonsContainer}>
        <Button
          title="Go to Books"
          onPress={() => navigation.navigate('Books')}
          color= '#A9A9F5'
        />
        <Button
          title="Go to Authors"
          onPress={() => navigation.navigate('Authors')}
          color= '#2ECCFA'
        />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Authors" component={AuthorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  homeStyle: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FAFAFA'
  },
  buttonsContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
export default App;