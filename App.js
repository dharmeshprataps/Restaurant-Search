import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import SearchScreen from './src/screens/SearchScreen'
import resultsScreeenShow from './src/screens/resultsScreenShow'
const navigator=createStackNavigator({
  Search : SearchScreen,
  resultShow: resultsScreeenShow
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title: 'Business Search'
  }
}
)

export default createAppContainer(navigator);