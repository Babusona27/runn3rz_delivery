import React from 'react'
import { StatusBar, Dimensions, TouchableOpacity, Image, TextInput,Text } from 'react-native'
import { Container, Header, Content, View, Icon } from 'native-base'

import NavigationService from '@Service/Navigation'
import Style from '@Theme/Style'
import Styles from '@Screen/Public/Login/Style'
const deviceWidth = Dimensions.get('window').width
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor='#9013FE' animated barStyle='light-content' />
        <Content contentContainerStyle={Style.layoutDefault}>
          <Image style={Styles.introImg} source={require('@Asset/images/toplogo.png')} />
          <View style={Styles.loginBox}>
          <Text style={Styles.loginBoxText}>Login</Text>
            <View style={Styles.inputBox}>
            <FontAwesome name="phone" style={Styles.inputIcon} />
              <TextInput
                style={Styles.loginInput}
                placeholder={'Phone'}
                placeholderTextColor={'#858585'}
                underlineColorAndroid='transparent'
                onChangeText={(phone) => this.setState({ phone })}
                value={this.state.phone}
                
              />
            </View>

            <View style={Styles.inputBox}>
              <MaterialCommunityIcons name="lock" style={Styles.inputIcon} />
              <TextInput
                style={Styles.loginInput}
                placeholder={'Password'}
                placeholderTextColor={'#858585'}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={Styles.buttonBox} onPress={() => {
              NavigationService.navigate('PublicHome')
            }}>
              <Text style={Styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              NavigationService.navigate('PublicForgotPass')
            }}>
              <Text style={Styles.forgotPassText}>Forgot Password</Text>
            </TouchableOpacity>

           
            

          </View>
          <View style={Styles.outerFooterBox}>
            <Image style={Styles.footerImg} source={require('@Asset/images/veges.png')} />
          </View>
        </Content>


      </Container>
    )
  }
}
