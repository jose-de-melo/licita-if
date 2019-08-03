import React, { Component } from 'react'
import {FaRobot, FaUser} from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Emoji from 'react-emoji-render';

import { getMessages } from './chatActions'

const emojis = {
    "wiking": '&#128523;'
}

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    componentWillMount() {
        this.props.getMessages()
    }

    renderLink(message){
        const messageArray = message.split(';')
        return(
            <a className="link-chat" href={messageArray[1]} target="_blank">
                {messageArray[2]}
            </a>
        )

    }

    renderMessages() {
        const list = this.props.messages || []
        if(list.length > 0){
            return list.map((item, index) => (
                <li key={index} className={`message ${item.base} appeared`} >
                    <div className="avatar">{(item.base == 'sent') ? '' : <FaRobot /> }</div>
                    <div className="text_wrapper">
                        {
                            (item.message.includes('<link>')) 
                            ? this.renderLink(item.message) 
                            : 
                            <div className="text">{item.message}</div>
                        }
                    </div>
                </li>
            ))
        }

        else{
            return (
                <li>

                </li>
            )
        }
    }

    render() {
        const messages = this.renderMessages()
        return (
            <ul className="messages">
                {messages}
            </ul>
        )
    }

    componentDidUpdate() {
        $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
    }
}

const mapStateToProps = state => ({
  messages: state.chat.messages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)