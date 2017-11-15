import React from "react";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null,
  };

      render() {
    return (
      <View>
        <Image source={require('../assets/images/landscaping.jpeg')} style={styles.backgroundImage}>
      <View className="container">
         <View className="row">
          <View className="jumbotron">
          
            <Text style={styles.Header}>Welcome to GP-Landscaping</Text>
            
            <Text className="text-center">
                          
            {'\n'}{'\n'}

              <Text style={styles.MainText}>
              Need tools? Try clicking on the Building below.

              {'\n'}{'\n'}{'\n'}{'\n'}

              To View our About Us page, please click on the Info icon.
              {'\n'}{'\n'}{'\n'}{'\n'}

              To add a new client, please click on the Book Icon below.
              {'\n'}{'\n'}{'\n'}{'\n'}

              To view customer information, please click on the button below.
              <Button
           onPress={this._handleHelpPress}
           title='Jobs list'
           color='#2980B9'
           /> 
              </Text>
            </Text>
          </View> 
        </View>
      </View>
      </Image>
      </View>
    );
  }
  handleHelpPress = () => {
    Linking.openURL(
      'https://nameless-plains-72696.herokuapp.com/Table'
    );
  }; 
};

const styles = StyleSheet.create({
  Header: {
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 26,
    color: 'white',
  },
  
  MainText: {
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'center',
    height: 620,
  },
  
  jumbotron: {
    position: 'absolute',
    height: '100%',

  },
})
