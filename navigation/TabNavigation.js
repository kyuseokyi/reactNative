import { createBottomTabNavigator } from "react-navigation";
import MoviesScreen from "../screens/Movies"
import TVScreen from "../screens/TV"
import SearchScreen from "../screens/Search"
import {BG_COLOR} from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
    {
        Movies: MoviesScreen,
        TV: TVScreen,
        Search: SeearchScreen
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }

    }

);

export default createBottomTabNavigator(TabNavigation);