import React from 'react'
import {FaList, FaRobot, FaFileContract} from 'react-icons/fa'
import { Link, withRouter } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <div className="project-info">
                    <h1 className="display-1 text-center project-info-title">LicitaIF</h1>
                    <p className="lead text-center project-info-description">A ajuda que você precisava para aprender tudo sobre as Licitações &#128526; </p>
                </div>

                <div className="row no-gutters row-home">
                    <div className="col-lg-6 text-white col-icon">
                        <FaList />
                    </div>

                    <div className="col-lg-6 text-white" style={{backgroundColor: '#eeeeee'}}>
                        <div className="align-middle text-center" style={{color:'black', paddingTop:'25px'}}>
                            <h3 className="title-div-home">FAQs</h3> 
                            <p className="content-div-home">
                                Na aba <Link to={'/faqs'}>FAQs</Link>,você encontra respostas para dúvidas comuns de quem 
                                está entrando no mundo das licitações.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
                <div className="col-lg-6 order-lg-2 text-white col-icon-sm">
                        <FaFileContract/>
                    </div>
                    <div className="col-lg-6 order-lg-2 text-white" style={{backgroundColor: '#eeeeee'}}>
                        <div className="align-middle text-center" style={{color:'black', paddingTop:'25px'}}>
                            <h3 className="title-div-home">Manuais e Documentos</h3> 
                            <p className="content-div-home">
                                Na aba <Link to={'/documents'}>Manuais e Documentos</Link>, você tem acesso a diversos modelos de documentos específicos para o Insituto utilizados
                                em processos licitatórios além de manuais e cartilhas sobre as licitações.
                            </p>
                        </div>    
                    </div>

                    <div className="col-lg-6 order-lg-2 text-white col-icon col-icon-2">
                        <FaFileContract/>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white col-icon">
                        <FaRobot />
                    </div>

                    <div className="col-lg-6 order-lg-2 text-white" style={{backgroundColor: '#eeeeee'}}>
                        <div className="align-middle text-center" style={{color:'black', paddingTop:'25px'}}>
                            <h3 className="title-div-home">Bil</h3> 
                            <p className="content-div-home">
                                Para facilitar ainda mais a sua experiência, você pode conversar com o Bil, assistente virtual do LicitaIF,
                                para sanar qualquer dúvida que ainda tenha sobre as licitações e o funcionamento do Setor de Licitações do IF Sudeste MG Campus Barbacena.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Home)