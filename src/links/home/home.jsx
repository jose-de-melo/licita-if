import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div >
                <div className="jumbotron jumbotron-fluid" style={{position:"relative"}}>
                    <div className="container">
                        <h1 className="display-4">Bem-vindo ao LicitaIF!</h1>
                        <p className="lead">O LicitaIF foi criado com o intuito de facilitar os processos licitatórios do IF Sudeste MG, Campus Barbacena.</p>
                        <p className="lead"></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home