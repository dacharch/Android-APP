import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Algebra from '../components/Algebra/Algebra';
import Finance from '../components/Finance/Finance';
import Health from '../components/Health/Health';
import Misc from "../components/Misc/Misc"

const Drawer = createDrawerNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Calculator" component={HomeScreen} />
                <Drawer.Screen name="Algebra" component={Algebra} />
                <Drawer.Screen name="Finance" component={Finance} />
                <Drawer.Screen name="Health" component={Health}  />
                <Drawer.Screen name="Misc" component={Misc} />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}




export default Navigation

