import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigation";
import ProductPage from "../src/screens/productPage";

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
            component={ProductPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;