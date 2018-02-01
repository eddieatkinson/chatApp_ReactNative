import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

class Home extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name: ''
    //     }
    // }
    state = {
        name: ''
    };

    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name :
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder='John Snow'
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        });
                        console.log('Change');
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity
                    onPress={() => {
                        // Navigate to the second screen and pass it the name
                        // console.log(this.state.name);
                        // alert(this.state.name);
                        // debugger;
                        Actions.chat({
                            nameTyped: this.state.name
                        });
                        console.log('//////////')
                        console.log(this.state.name);
                        console.log('//////////')
                    }}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20
    },
    buttonText: {
        marginLeft: 20,
        fontSize: 20
    }
});

export default Home;