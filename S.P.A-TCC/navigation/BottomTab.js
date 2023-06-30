import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Inicial from "../components/inicial";
import QRcode from "../components/QRcode";

const Tab = createBottomTabNavigator();

function BottomTab(){
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveBackgroundColor: 'red', tabBarActiveBackgroundColor: 'pink'}}>
            <Tab.Screen
                name="QrCode"
                component={QRcode}
            />
            <Tab.Screen
                name="Inicio"
                component={Inicial}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;