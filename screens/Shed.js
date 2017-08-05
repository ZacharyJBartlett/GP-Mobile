import React from 'react';
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

export default class GpPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          
          
          
              <View style={styles.getStartedContainer}>
              
              <Text style={styles.getStartedText}>
              Need tools for an upcoming job? click on the links below for a few tool rental/purchasing options.{'\n'}
              </Text>
              
              <Image style={styles.firstImage}
              source={require('../assets/images/lowes.jpeg')}
              style={styles.welcomeImage}
              />

              <TouchableOpacity
              onPress={this._handleHelpPress0}
              style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
              
              Lowes {"\n"} 
              </Text>
              </TouchableOpacity>

              <Image
              source={require('../assets/images/HD.jpeg')}
              style={styles.welcomeImage}
              />

              <TouchableOpacity
              onPress={this._handleHelpPress1}
              style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                
              Home Depot {"\n"}
              </Text>
              </TouchableOpacity>

              <Image
              source={require('../assets/images/lawnsite.jpeg')}
              style={styles.welcomeImage}
              />

              <TouchableOpacity
              onPress={this._handleHelpPress2}
              style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
              Looking for other landscapers to bounce ideas off of? Try this link.
              
              </Text>
              </TouchableOpacity>
              </View>
          </ScrollView>
        
        

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
              </View>
             </View>
    );
  }
  
  _handleHelpPress0 = () => {
    Linking.openURL(
      'https://tinyurl.com/lowesrentals'
    );
  };
  _handleHelpPress1 = () => {
    Linking.openURL(
      'http://www.homedepot.com/c/tool_and_truck_rental'
    );
  };
  _handleHelpPress2 = () => {
    Linking.openURL(
      'https://www.lawnsite.com/'
    );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7E9',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
    marginBottom: 20,
    
  },
  TouchableOpacity: {
    color: 'grey',
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
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',

  },
  
});
