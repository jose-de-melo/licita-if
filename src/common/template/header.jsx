import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component{
    render(){
        return(
            /**
            <div>
                <div classNameName="masthead clearfix">
                    <div classNameName="inner">
                        <h3 classNameName="masthead-brand">LicitaIF</h3> 
                        <nav>
                            <ul classNameName="nav masthead-nav">
                                <li classNameName={this.props.location.pathname == '/' ? 'active' : ''}>
                                    <Link to={'/'}>
                                        Página Inicial
                                    </Link>
                                </li>

                                <li classNameName={this.props.location.pathname == '/forum' ? 'active' : ''}>
                                    <Link to={'/forum'}>
                                        Fórum
                                    </Link>
                                </li>

                                <li classNameName={this.props.location.pathname == '/documents' ? 'active' : ''}>
                                    <Link to={'/documents'}>
                                        Manuais e Documentos
                                    </Link>
                                </li>

                                <li classNameName={this.props.location.pathname == '/about' ? 'active' : ''}>
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
            */

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#673ab7'}}>
                    <a className="navbar-brand" href="/"><span className="licita">Licita</span><span className="if">IF</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className={this.props.location.pathname == '/' ? 'nav-item active' : 'nav-item'}>
                                <Link to={'/'}>
                                    Página Inicial
                                </Link>
                            </li>
                            
                            <li className={this.props.location.pathname == '/feed' ? 'nav-item active' : 'nav-item'}>
                                <Link to={'/feed'}>
                                    Feed
                                </Link>
                            </li>

                            <li className={this.props.location.pathname == '/documents' ? 'nav-item active' : 'nav-item'}>
                                <Link to={'/documents'}>
                                    Manuais e Documentos
                                </Link>
                            </li>

                            <li className={this.props.location.pathname == '/sobre' ? 'nav-item active' : 'nav-item'}>
                                <Link to={'/sobre'}>
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Header