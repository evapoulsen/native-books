import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import BooksScreen from "./src/screens/BooksScreen";
import AuthorsScreen from "./src/screens/AuthorsScreen";
import LogoTitle from "./src/screens/LogoTitle";
import BookDetailScreen from "./src/screens/BookDetailScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen 
				name="Home" 
				component={HomeScreen} 
				options={{ 
					headerLeft: (props) => <LogoTitle {...props} />,
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
				options={({route}) => ({title: route.params.name})} 
				/>
				<Stack.Screen 
				name="Authors" 
				component={AuthorsScreen} 
				options={({route}) => ({title: route.params.name})} 
				/>
				<Stack.Screen
				name="Book Details"
				component={BookDetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
