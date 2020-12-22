import React from 'react'
import { Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import DrawerContent from '@Component/Menu/Left'
import PublicHome from '@Screen/Public/Home'

import PublicLogin from '@Screen/Public/Login'

import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
  {
    PublicHome: {
      screen: PublicHome
    }, 
    PublicLogin: {
      screen: PublicLogin
    },               
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    headerMode: 'none',
    initialRouteName: 'PublicLogin',
    drawerWidth: deviceWidth - 50
  }
)

const AppNav = createStackNavigator(
  {
    PublicLogin: {
      screen: PublicLogin
    },                
    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Drawer'
  }
)

const AppContainer = createAppContainer(AppNav);

export default class App extends React.Component {
  render () {
    return (
      <AppContainer ref={(r) => { NavigationService.setTopLevelNavigator(r) }} />
    )
  }
}
