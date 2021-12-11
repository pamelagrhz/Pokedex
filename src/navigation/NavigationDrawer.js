import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../components/Home";
import SearchScreen from "../screens/SearchScreen";

const Drawer = createDrawerNavigator();


export default function NavigationDrawer(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Search screen" component={SearchScreen}/>
        </Drawer.Navigator>
    )

}