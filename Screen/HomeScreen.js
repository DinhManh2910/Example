import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class HomeScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:"center"}}>
                <Text>Học code dạo vui ghê bạn ơi</Text>
            </View>
        );
    }
}

export default HomeScreen;