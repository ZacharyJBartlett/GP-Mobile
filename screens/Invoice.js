import React, { Component } from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry, 
  TextInput,
  Button,
} from 'react-native';

export default class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

    }

    render() {
        return (
           <View style={styles.container}> 
            <View style={styles.contentContainer}>
            <Text>First Name</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 15,}}
            onChangeText={ (text) => this.setState({text}) }
            value={this.state.text}
            />

            <Text>Last Name</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15,}}
            onChangeText1={ (text1) => this.setState({text1}) }
            value={this.state.text1}
            />

            <Text>Email</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 15,}}
            onChangeText2={ (text5) => this.setState({text5}) }
            value={this.state.text5}
            />

            <Text>Address</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 15,}}
            onChangeText2={ (text2) => this.setState({text2}) }
            value={this.state.text2}
            />

            <Text>City</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 15,}}
            onChangeText3={ (Text3) => this.setState({Text3}) }
            value={this.state.Text3}
            />

            <Text>Zip</Text>
            <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1,marginBottom: 15,}}
            onChangeText4={ (Text4) => this.setState({Text4}) }
            value={this.state.Text4}
            />

           <Button
           title='Submit Client Info'
           color='#2980B9'
           /> 
           <Text>{'\n'}</Text>
            
           <Button
           onPress={this._handleHelpPress}
           title='Jobs list'
           color='#2980B9'
           /> 
            
            </View>
            </View>
            
        );
    }
     _handleHelpPress = () => {
    Linking.openURL(
      'https://nameless-plains-72696.herokuapp.com/Table'
    );
  }; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
  contentContainer: {
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    paddingTop: 15,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },

  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  textinput: {
      marginTop: 15,
      marginBottom: 15,
  },
  ButtonContainer: {
      marginTop: 15,
      width: '100%',
      marginLeft: '8%',
      alignContent: 'flex-end',
  },
    Button: {
        marginTop: 15,
        width: '20%',
        borderWidth: 10,
    }
});




