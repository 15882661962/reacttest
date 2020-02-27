import React,{Component} from 'react'
import { 
    View, 
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native'

import ReadBook from './Read/ReadBook'
import ReadTab from './Read/ReadTab'
import ReadDirectory from './Read/ReadDirectory'
class ReadScene extends Component{
    constructor(props){
        super(props)
    }
    
    static navigationOptions = ({navigation}) => {
        //const params = navigation.state.params || '考研必备';
        let navigationOptions = {
            headerTitle:'考研必备',
            headerStyle:{
                backgroundColor:'#f2f2f2',
                //shadowColor:'#f2f2f2'
            },
            headerTintColor:'#000',
            headerBackTitle:'考研必备',
            headerLeft:()=>
            <TouchableOpacity 
            style={{width:50}}
            onPress={()=>{
                navigation.goBack();
            }}
            >
            <Image 
            source={require('../images/home/icon-back-blue.png')}
            style={{left:15}}
            />
            </TouchableOpacity>,
            headerRight:()=>
            <View>
                <TouchableOpacity 
                style={{width:50}}
                >
                <Image 
                source={require('../images/read/share.png')}
                style={{width:30,resizeMode:'contain'}}
                />
                </TouchableOpacity>
            </View>,
        }
        return navigationOptions;
    };

    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <ReadBook/>
                    <ReadTab/>
                    <ReadDirectory/>
                </ScrollView>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default ReadScene