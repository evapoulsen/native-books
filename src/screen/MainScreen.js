import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BooksScreen from './BooksScreen';
import BookDetailScreen from './BookDetailScreen';
import AuthorsScreen from './AuthorsScreen';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function MainScreen() {
	return (
			<Tab.Navigator
				initialRouteName='Library'
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
					  let iconName= "ios-library-sharp";
					  if (route.name === 'Library') {
						iconName = 'ios-library-sharp';
					  } else if (route.name === 'My Books') {
						iconName = 'ios-book-sharp';
					  } else if (route.name === 'The Authors') {
						iconName = 'ios-pencil-sharp';
					  }
		  
					  return <Ionicons name={iconName} size={size} color={color} />;
					},
				  })}>
				<Tab.Screen name="Library" component={HomeScreen} />
				<Tab.Screen name="My Books" component={BooksScreen} />
				<Tab.Screen name="The Authors" component={AuthorsScreen} />
				<Tab.Screen name="Book Details" component={BookDetailScreen} options={{tabBarButton: () => null}} />
			</Tab.Navigator>
	);
}

export default MainScreen;
