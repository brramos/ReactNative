'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View,
  Image,
} = React;

var Login = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('image!octocat')} />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff',
        flex: 1,
        paddingTop: 42,
        alignItems: 'center'
    },
    logo: {
        width: 66,
        height: 55
    }
})

module.exports = Login;
