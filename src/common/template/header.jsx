import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:'#673ab7', zIndex:'0'}}>
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
                            
                            <li className={this.props.location.pathname == '/faqs' ? 'nav-item active' : 'nav-item'}>
                                <Link to={'/faqs'}>
                                    FAQs
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

export default withRouter(Header)