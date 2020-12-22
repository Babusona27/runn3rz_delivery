import React, { Component } from 'react';
import { Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  View
} from 'native-base';
import Styles from './Style';
import NavigationService from './../../../Service/Navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import * as MENU from './Menu'
import AsyncStorage from '@react-native-community/async-storage';


class MenuLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      isLogedIn: false,
      username: ''
    }


  }


  render() {
    return (
      <Container>
        <Content
          bounces={false}
          contentContainerStyle={Styles.layout}
          render
        >
          {/* <Image source={require('@Asset/images/bg.jpg')} resizeMode='cover' style={Styles.navImg} /> */}
          <View style={Styles.nav}>
            <View style={Styles.navProfile}>

              {/* <Text style={Styles.navName}>{this.state.username}</Text> */}
              <Image style={{ height: 120, width: 120 }} source={require('@Asset/images/logo_circle.png')} />
            </View>
            <ScrollView>
              <View style={Styles.navMenu}>

                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicHome')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="home" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>Home</Text>
                </TouchableOpacity>


                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicOrder')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="shopping-bag" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>My Order</Text>
                </TouchableOpacity>


                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicCategory')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="list" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>Categories</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicNotification')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="bell" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicWishlist')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="heart" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>My Wishlist</Text>
                </TouchableOpacity>


                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicContact')
                }}>

                  <View style={Styles.iconBox}>
                    <MaterialIcons name="contact-phone" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>Contact Us</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicTerms')
                }}>

                  <View style={Styles.iconBox}>
                    <FontAwesome name="info" style={Styles.socialIcon} />
                  </View>
                  <Text style={Styles.menuText}>Terms Of Use</Text>
                </TouchableOpacity>


                <TouchableOpacity style={Styles.menuitem} onPress={() => {
                  NavigationService.closeDrawer()
                  NavigationService.navigate('PublicLogin')
                }}>
                  <View style={Styles.iconBox}>
                    <FontAwesome name="lock" style={Styles.socialIcon} />
                  </View>

                  <Text style={Styles.menuText}>Login</Text>
                </TouchableOpacity>
                

              </View>

            </ScrollView>

          </View>
        </Content>
      </Container>
    )
  }
}

export default MenuLeft