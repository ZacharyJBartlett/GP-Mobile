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
      <Image source={require('../assets/images/toolshed.jpeg')} style={styles.backgroundImage}>
       
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          
          <View>
            
          <View>
            
            <Text style={styles.welcomeContainer}>G.P. Landscaping</Text>
              </View>
              <View>
              <Text style={styles.getStartedText1}>About Us</Text>
              </View>
              <Text style={'\n'}></Text>
              <View>
                <Text style={styles.getStartedText2}>
                G.P. Landscaping are your number one go to for all your landscaping needs. No matter how large or complex the project, we will never stop working for you. Whether you need a green thumb, a professional consultation, or even an installation no request is too small or outlandish for any client.
                </Text>

                <Text style={'\n'}></Text>

                <Text style={styles.getStartedText2}>
                Started by top Entrepreneurs in the industry, G.P. Landscaping is the culmination of decades of experience and creativity in the landscaping industry. From pool installation and concrete, to basic beautification, G.P has the ability to do everything needed.
                </Text>
                
                <Text style={'\n'}></Text>

                <Text style={styles.getStartedText2}>
                With affordable and negotiable pricing, find out if G.P. Landscaping is your next, best choice.
                </Text>
                </View>
                
                </View>
                
          </ScrollView>
        </Image>
        

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
    width: '100%',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    textAlign: 'center',
    fontSize: 26,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 140,
    height: 38,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText1: {
    fontSize: 20,
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  getStartedText2: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: 18,
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
  navigationFilename: {
    marginTop: 5,
  },
  
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    justifyContent: 'center',
    height: 620,
  },
});
