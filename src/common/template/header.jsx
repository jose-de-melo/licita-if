import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">LicitaIF</h3>
                        <nav>
                            <ul className="nav masthead-nav">
                                <li className={this.props.location.pathname == '/' ? 'active' : ''}>
                                    <Link to={'/'}>
                                        Página Inicial
                                    </Link>
                                </li>

                                <li className={this.props.location.pathname == '/forum' ? 'active' : ''}>
                                    <Link to={'/forum'}>
                                        Fórum
                                    </Link>
                                </li>

                                <li className={this.props.location.pathname == '/documents' ? 'active' : ''}>
                                    <Link to={'/documents'}>
                                        Manuais e Documentos
                                    </Link>
                                </li>

                                <li className={this.props.location.pathname == '/about' ? 'active' : ''}>
                                    <Link to={'/about'}>
                                        Sobre
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Header