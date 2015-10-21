'use strict';

var React = require('react-native');
var buffer = require('buffer');
var {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS,
} = React;

class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showProgress: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('image!octocat')} />
                <Text style={styles.heading}>Hello Octo Cat!</Text>
                <TextInput onChangeText={(text)=> this.setState({username: text})} style={styles.input} placeholder="Github username" />
                <TextInput onChangeText={(text)=> this.setState({password: text})} style={styles.input} placeholder="Github password" secureTextEntry={true} />
                <TouchableHighlight style={styles.button} onPress={this.login.bind(this)}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableHighlight>
                <ActivityIndicatorIOS animating={this.state.showProgress} size="large" style={styles.loading} />
            </View>
        );
    }

    login() {
        console.log('Attempting to login with username: ' + this.state.username);
        this.setState({showProgress: true});

        var b = new buffer.Buffer(this.state.username + ':' + this.state.password);
        var encodedAuth = b.toString('base64');

        fetch.('https://api.github.com/user', {
            headers: {
                'Authorization' : 'Basic' + encodedAuth
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            this.setState({showProgress: false});
        })
    }
}

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
    },
    loading: {
        marginTop: 20
    }
})

module.exports = Login;
