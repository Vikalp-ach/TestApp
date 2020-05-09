import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'

//======== Import Common Screen  ===============
import DashboardScreen from '../containers/Dashboard/index'
import DetailsScreen from '../containers/Dashboard/details'

// Setup the stack navigation
const AppScreens = createStackNavigator({
  //======== Common Screen  ===============
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions:{
        header: null,
        gesturesEnabled: false,
      }
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions:{
        header: null,
        gesturesEnabled: false,
      }
    }
  },
  {
    initialRouteName: "Dashboard"
  }
);

const MainApp = createAppContainer(
  createSwitchNavigator({
    AppScreens
  })
)

export default MainApp
