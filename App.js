import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screen/DrawerNav';
import 'react-native-gesture-handler';
import 'react-native-reanimated';



function App() {
	return (
		<NavigationContainer>
			<MainScreen />
		</NavigationContainer>
	);
}

export default App;