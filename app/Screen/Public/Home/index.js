import React from 'react'
import { StatusBar, TouchableOpacity, Image, ImageBackground, FlatList, RefreshControl, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Content, Icon, Text, View, Tab, Tabs, ScrollableTab } from 'native-base'
import Spinner from "react-native-loading-spinner-overlay";
import NavigationService from '@Service/Navigation'


import Style from '@Theme/Style'
import Styles from '@Screen/Public/Home/Style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default class extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {


  }

  render() {
    return <Container  >
      <Header style={Style.navigation}>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <ImageBackground source={require('@Asset/images/menubg.png')} style={Style.navigationBar}>
          <View style={Style.navLeft}>
            <TouchableOpacity onPress={() => {
              NavigationService.openDrawer()
            }}
            >
              <Image source={require('@Asset/images/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={Style.navMiddle}>
            <Text style={Style.navMiddleText}>RUNN3RZ</Text>
          </View>
          <View style={Style.navRight} >
           
          </View>
        </ImageBackground>
      </Header>

      <Content contentContainerStyle={Style.layoutDefault}>
     


      </Content>

    </Container>
  }
}
