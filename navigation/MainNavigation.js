import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator({
    Tabs: { screen: TabNavigation, navigationOptions: { title: "Suup"} },
    Detail: DetailScreen
},{
    //initialRouteName: "DetailScreen"
    mode: "modal"
});

export default createAppContainer(MainNavigation)