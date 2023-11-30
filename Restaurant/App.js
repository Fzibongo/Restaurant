import { Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from './Components/Menu';
import Forgot from './Components/ForgotPassword';
import LogIn from './Components/Log-in';
import Sign from './Components/Sign up';

import Spaghetti from './Components/Spaghetti';
import Salmon from './Components/Salmon';
import Goose from './Components/Goose';
import Chicken from './Components/Chicken';
import Sirlion from './Components/Sirlion';
import Avocado from './Components/Avocado';
import Fish from './Components/Fish';
import Rice from './Components/Rice';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <NavigationContainer >
      <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Sign up" component={Sign} />
        
        <Stack.Screen name="Salmon" component={Salmon} />
        <Stack.Screen name="Goose" component={Goose} />
        <Stack.Screen name="Avocado" component={Avocado} />
        <Stack.Screen name="Rice" component={Rice} />
        <Stack.Screen name="Spaghetti" component={Spaghetti} />
        <Stack.Screen name="Chicken" component={Chicken} />
        <Stack.Screen name="Sirlion" component={Sirlion} />
        <Stack.Screen name="Fish" component={Fish} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Checkout" component={Checkout} />
       </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});
