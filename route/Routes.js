import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigation";
import ProductScreen from "../src/screens/ProductScreen";


const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Product"
            component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;