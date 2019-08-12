import '../common/template/dependencies'

import React from 'react'
import Routes from './routes'
import Chat from '../chat/chat'
import Footer from '../common/template/footer'
import Header from '../common/template/header';

export default props => (
    <div className="site-wrapper-inner">
        <div className="cover-container">
            <Header />
            <Routes />
            <Footer nome="José"/>
        </div>
        <Chat />
    </div>
)