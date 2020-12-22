const React = require("react-native");
const { Platform, Dimensions } = React;
const deviceWidth = Dimensions.get('window').width
export default {
    introImg: {
        resizeMode: 'cover',
        marginTop: -8,
        height: 140,
        width: deviceWidth

    },

    footerImg: {
         resizeMode: 'contain',        
        height: 130,
       
    },
    introView: {
        width: '100%',
        height: 150,
        marginTop: -7
    },
    loginBox: {
         height: 400,
        width: deviceWidth - 60,
        marginLeft: 30,
        marginRight: 30,
        marginTop: -30,
        margin: 10,
        backgroundColor: '#FFF',
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.9,
        shadowRadius: 5,
        borderRadius: 10,
        justifyContent:'center',
         alignItems:'center'
    },
    inputBox:{ width: '90%', height:50, flexDirection: 'row', borderBottomColor:'#858585',margin:10,
    borderBottomWidth:1 },
    outerFooterBox: { justifyContent: 'center', alignItems: 'center', flex: 1 },
    label: {
        flex: 1,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#FFF'
    },
    inputIcon: {
        position: "absolute",
        top: 10,       
        fontSize: 30,
        fontWeight: "bold",
        color: '#858585'
    },
    
    formIcon: {
        color: '#000',
        fontSize: 24,
        paddingHorizontal: 5
    },
    loginInput:{
       left:30,
       fontFamily: 'Montserrat-Regular',
    },
    buttonBox: { 
        width: '90%', 
        height:50, 
        margin:10,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        elevation: 10,
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.9,
        shadowRadius: 5,
    },
    buttonText:{
        fontFamily: 'Montserrat-Regular',       
        fontSize:20,
        color:'#fff'
    },
    forgotPassText:{
        fontFamily: 'Montserrat-Regular',     
        fontSize:13,
        color: '#C5252D' 
    },
    signupText:{
        flexDirection:'row',
        marginTop:5
    },
    socialIconBox:{
        flexDirection:'row',  
              
    },
    socialIcon:{
        margin:15,
        fontSize:35,        
    },
    buttonText1:{
        fontFamily: 'Montserrat-Regular',     
        fontSize:13,
        color: '#565656'  
    },
    alsoSignIn:{
        fontFamily: 'Montserrat-Regular',     
        fontSize:17,
        color: '#565656',
        fontWeight:'bold',
        marginTop:20  
    },
    loginBoxText:{
        alignSelf:'center',
        fontFamily: 'Montserrat-Regular',     
        fontSize:17,
        fontWeight:'bold',
        marginTop:20
    }
    
}