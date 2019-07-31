import React, { Component } from 'react'
import {FaRobot, FaUser} from 'react-icons/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMessages } from './chatActions'

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    componentWillMount() {
        this.props.getMessages()
    }

    renderMessages() {
        const list = this.props.messages || []
        if(list.length > 0){
            return list.map((item, index) => (
                <li key={index} className={`message ${item.base} appeared`} >
                    <div className="avatar">{(item.base == 'sent') ? '' : <FaRobot /> }</div>
                    <div className="text_wrapper">
                        <div className="text">{item.message}</div>
                        {(item.link) ? '' : ''}
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