import React, { Component } from 'react'

class ChatSend extends Component {

    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            console.log('enviou')
        }
    }

    render() {
        return (
            <div className="bottom_wrapper clearfix">
                <div className="message_input_wrapper">
                    <input className="message_input" placeholder="Digite sua mensagem aqui..." onKeyUp={this.keyHandler} />
                </div>
                <div className="send_message" onClick={() => console.log('teste')}>
                    <div className="icon"></div>
                    <div className="text">Enviar</div>
                </div>
            </div>
        )
    }
}

export default ChatSend