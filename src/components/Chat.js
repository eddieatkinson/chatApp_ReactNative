import React, { Component } from 'react';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class Chat extends Component{
    state = {
        messages: []
    }

    componentWillMount(){

    }

    render(){
        console.log(this.props);
        return(
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    // Send message to your backend
                    Backend.sendMessage(message)
                }}
                user={{
                _id: this.props.nameTyped,
                name: this.props.nameTyped
                }}
            />
        )
    }
    
    componentDidMount(){
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return{
                    messages: GiftedChat.append(previousState.messages, message),
                }
            });
        });
    }

    componentWillUnmount(){
        Backend.closeChat();
    }
}

// Chat.defaultProps = {
//     name: 'John'
// }

// Chat.PropTypes = {
//     name: React.PropTypes.string
// }

export default Chat;