import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { Header, Left, Icon } from 'native-base';



class SignUp3 extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00bfa5" }}>
                    <Left style={{ marginRight: "85%" }}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>
                <View style={styles.container}>
                    <View styles={styles.view}>
                        <Text style={styles.welcome}> When is your birthday? </Text>
                    </View>
                    <View style={styles.disclaimer}>
                        <Text style={{color:"white", fontSize: 12}}>You must be at least 18 years old to use Ting. Other people won't see your birthday.</Text>
                        
                    </View>
                    <View style={styles.birthdayInput}>
                        <TextInput underlineColorAndroid="white" />
                    </View>
                    <View style={styles.nextButton}>
                    
                            <View style={styles.buttonStyle}>
                                <Text>
                                    <Icon name="ios-arrow-forward" size={24} color="#00bfa5" />
                                </Text>
                            </View>
                        
                    </View>
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
        fontSize: 27,
        marginLeft: "-16%",
        marginBottom: 10
    },
    disclaimer: {
        width: "80%",
        marginLeft:'-8%',
        
    },
    nextButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        marginLeft: "70%",
        marginTop: 30,
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    },
    birthdayInput: {
        width: '90%',
        marginTop: -10
    },

});

export default SignUp3;