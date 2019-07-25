import React from 'react'
import {FaList, FaRobot, FaFileContract} from 'react-icons/fa'
import { Link } from 'react-router'

class Home extends React.Component{
    render(){
        return(
            <div >
                <div style={{marginTop:'150px'}}>
                    <h1 className="display-1 text-center">LicitaIF</h1>
                    <p className="lead text-center" style={{fontSize:'30px'}}>A ajuda que você precisava para aprender tudo sobre as Licitações &#128526;</p>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white col-icon">
                        <FaList />
                    </div>

                    <div className="col-lg-6 order-lg-2 text-white" style={{backgroundColor: '#eeeeee'}}>
                        <div className="align-middle text-center" style={{color:'black', paddingTop:'25px'}}>
                            <h3>Feed de Notícias e Informações</h3> 
                            <p>
                                Na aba <Link to={'/feed'}>Feed</Link>, você pode ficar por dentro das últimas notícias sobre Licitações aleḿ
                                de encontrar informações que podem ser úteis pra você.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white" style={{backgroundColor: '#eeeeee'}}>
                        
                    </div>

                    <div className="col-lg-6 order-lg-2 text-white col-icon" style={{backgroundColor: '#aa00ff'}}>
                        <FaFileContract/>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white col-icon" style={{backgroundColor: '#aa00ff'}}>
                        <FaRobot />
                    </div>

                    <div className="col-lg-6 order-lg-2 text-white" style={{backgroundColor: '#eeeeee'}}>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home