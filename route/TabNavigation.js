import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, SIZES } from '../constants/theme'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../src/screens/Home';
import Cart from '../src/screens/Cart';
import Profile from '../src/screens/Profile';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart-outline' : 'cart-outline';
                    }
                    else if (route.name === 'Favourite') {
                        iconName = focused ? 'heart-outline' : 'heart-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person-outline' : 'person-outline';
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.second,
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    paddingVertical: 5, backgroundColor: COLORS.white,
                    shadowColor: 'black', position: 'absolute', height: SIZES.xLarge + 20,
                },
                tabBarLabelStyle: { paddingBottom: 3, display: 'none' },
                headerShown: false
            })}

        >
            <Tab.Screen name="Home" component={Home} />

            <Tab.Screen name="Favourite" component={Cart} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigator;