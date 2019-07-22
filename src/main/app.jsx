import '../common/template/dependencies'

import React from 'react'
import Routes from './routes'
import Chat from '../chat/chat'

export default props => (
    <div className="site-wrapper-inner">
        <div className="cover-container">
            <Routes />
        </div>
        <Chat />
    </div>
)