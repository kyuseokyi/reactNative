import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import {headerStyles} from "./config";

const MainNavigation = createStackNavigator({
    Tabs: {
        screen: TabNavigation,
        navigationOptions: {
            // headerTitle: "Tabs",
            // ...headerStyles,
            // headerStyle: {
            //     backgroundColor: "blue"
            // }
            header: null
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            ...headerStyles
        }
    }
},{
    //initialRouteName: "DetailScreen"
    headerMode: "float",
    headerBackTitleVisible: false
});

export default createAppContainer(MainNavigation)