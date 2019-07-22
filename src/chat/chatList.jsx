import React, { Component } from 'react'

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    renderMessages() {

        return (
            <li className={`message received appeared`}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                    <div className="text">teste</div>
                </div>
            </li>
        )
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

export default ChatList