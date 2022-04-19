import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BooksScreen from "./src/screens/BooksScreen";
import AuthorsScreen from "./src/screens/AuthorsScreen";


const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Books" component={BooksScreen} />
				<Stack.Screen name="Authors" component={AuthorsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;

