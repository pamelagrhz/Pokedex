import React from "react";
import { SafeAreaView, Text ,Button} from "react-native";

export default function SearchScreen(props){
    const {navigation} = props;
    const gotoPage = (goto) => {
        navigation.navigate(goto)
    }
    return (
        <SafeAreaView>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress = {()=> gotoPage("Home")} title= "Ir a Home" ></Button>

        </SafeAreaView>
    )

}
