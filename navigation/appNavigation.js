import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const appNavigation = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator>
    <Stack.Screen name="Home" options={{headerShown: false}}  component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default appNavigation

