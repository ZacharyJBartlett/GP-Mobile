// Include React
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

              </Text>
            </Text>
          </View>

         
         


          {/*<View className="col-md-6">

           {this.props.children}
           
            <Link to ="clients"><button className= "btn btn-success">New Client</button></Link>
          </View>*/}



          
          
        </View>
      </View>
      </Image>
      </View>
    );
  }
};

// Export the component back for use in other files
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
