'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} = React;

var Login = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('image!octocat')} />
                <Text style={styles.heading}>Hello Octo Cat!</Text>
                <TextInput style={styles.input} placeholder="Github username" />
                <TextInput style={styles.input} placeholder="Github password" secureTextEntry="true" />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff',
        flex: 1,
        paddingTop: 42,
        alignItems: 'center',
        padding: 10
    },
    logo: {
        width: 66,
        height: 55
    },
    heading: {
        fontSize: 30,
        marginTop: 8
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48bbec',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center'
    }
})

module.exports = Login;
