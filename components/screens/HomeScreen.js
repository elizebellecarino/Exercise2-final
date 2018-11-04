import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
  
    loginHandler = () => {
      this.props.navigation.navigate('Login')
    }
  render() {
      return (
          <View style={styles.container}>
          
              <View styles={styles.view}>
                  <Text style={styles.welcome}> Welcome to Ting </Text>
              </View>
              <View style={styles.loginButton}>
                  <TouchableOpacity onPress={() => this.loginHandler()}>
                      <View style={styles.buttonStyle}>
                          <Text style={styles.loginButtonText}>
                              Login
                          </Text>
                      </View>
                  </TouchableOpacity>
                  </View>
              <View style={styles.signUpButton}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Name')}>
                      <View style={styles.buttonStyle}>
                          <Text style={styles.signUpButtonText}>
                              Sign Up
                          </Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00bfa5',
  },
  welcome: {
      color: "#fff",
      fontSize: 30,
      marginLeft:'-23%',
      marginBottom: 10
  },
  loginButton: {
      width: "85%",
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#fff",
      backgroundColor: "#fff",
      marginTop: 10,
      justifyContent: "center"
  },
  signUpButton: {
      width: "85%",
      height: 40,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#fff",
      marginTop: 10,
      justifyContent: "center"
  },
  buttonStyle: {
      justifyContent: 'center',
      alignItems: "center"
  },
  signUpButtonText: {
      color: "#fff",
      fontSize: 14,
  },
  loginButtonText: {
      color: "#00bfa5",
      fontSize: 14,
  },
  buttonContainer: {
      width: "100%",
      // justifyContent: 'center',
      alignItems: "center"
  }
});

export default HomeScreen;
