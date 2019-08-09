import React, { Component } from 'react'
import {FaRobot, FaUser, FaDownload, FaFileDownload} from 'react-icons/fa'
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

    verifyMessage(message){
        if(message.includes('<link>')){
            return this.renderLink(message)
        }else{
            if(message.includes('<doc>')){
                return this.renderDocs(message)
            }
            else{
                return(
                    <div className="text">{message}</div>
                )
            }
        }                       
    }

    renderDocs(message){
        const messageArray = message.split(';')
        return(
            <a href={messageArray[1]} target="_blank" className="chat-link-doc">
                <div className="border-name-doc">
                    <span className="name-doc-chat">{messageArray[3]}</span> <span className="circle-download"><FaFileDownload/></span>
                </div>
            </a>
        )
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
                    <div className="avatar">{(item.base == 'sent') ? <FaUser/>: <FaRobot /> }</div>
                    <div className="text_wrapper">
                        {
                            this.verifyMessage(item.message)
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