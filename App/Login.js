'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput
} = React;

var Login = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('image!octocat')} />
                <Text style={styles.heading}>Hello Octo Cat!</Text>
                <TextInput style={styles.input} placeholder="Github username" />
                <TextInput style={styles.input} placeholder="Github password" secureTextEntry="true" />
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
    }
})

module.exports = Login;
