const React = require("react-native");
const { Platform, Dimensions } = React;
const deviceWidth = Dimensions.get('window').width

export default {
  /* -- Tab -- */
  tabStyle: {
    backgroundColor: '#111'
  },
  textStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: 'rgba(255,255,255,0.6)'
  },
  activeTabStyle: {
    backgroundColor: '#111'
  },
  activeTextStyle: {
    fontSize: 8,
    fontFamily: 'Montserrat-Regular',
    color: '#FFF'
  },
  /* Shows */
  bannerBox: {
    width: deviceWidth,
    height: 200
  },
  categoryheader: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: '#373737',
    fontWeight: 'bold'
  },
  categoryBox: {
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    height: 200
  },
  categoryInnerBox: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryImage: {
    width: 80,
    height: 80
  },
  categoryTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#373737',
    fontWeight: 'bold'
  },
  productOuterBox: {
    backgroundColor: '#F3F3F3',
    padding: 10,
    width: deviceWidth
  },
  leftBox: {
    flex: 1, alignItems: 'flex-start'
  },
  rightBox: {
    flex: 1, alignItems: 'flex-end'
  },
  leftText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: '#000',

  },
  rightText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: '#30AC4C',

  },
  productOuterImage: {
    marginTop: 20,
    bottom: 20,
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  productBox: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'red',
     margin: 5,
    backgroundColor: '#fff',
    elevation: 10,
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10,
    padding: 10
  },
  productTitle:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color:'#000'
  },
  productWeight:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 17,
    color: '#30AC4C',
  },
  productImage:{
    width: '100%',     
    height:120
  },
  searchOuter:{backgroundColor:'#547EE6',justifyContent:'center',alignContent:'center',padding:4},
  searchInner:{width:'100%',height:60, justifyContent:'center',backgroundColor:'#fff'}

}
