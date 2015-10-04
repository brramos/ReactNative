'use strict';

var React = require('react-native');
var {
  Text,
  StyleSheet,
  View
} = React;

var Login = React.createClass({
    render: function () {
        return (
            <View style={styles.container}></View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5fcff',
        flex: 1
    }
})

module.exports = Login;
