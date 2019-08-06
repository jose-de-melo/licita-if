import React from 'react'


class About extends React.Component{
    render(){
        return(
            <div>
                <h1 className="cover-heading" style={{color:'#7b1fa2', marginBottom: '1%', fontSize:'70px',marginTop:'120px', textAlign:'center'}}>Sobre o LicitaIF</h1>
                <div className="jumbotron w-75 mx-auto text-justify" style={{fontSize:"25px"}}> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O LicitaIF foi desenvolvido para ser o trabalho final do curso 'Chatbots: da teoria ao deploy, com IBM Watson' do projeto de extensão 'Laboratório de Redes de Conhecimento', do Instituto Federal do Sudeste de Minas Gerais, <i>campus</i> Barbacena.
                    <p style={{marginTop:"3%"}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O objetivo era construir um site simples, com ótima usabilidade e de fácil compreensão para ajudar os servidores do Instituto com Licitações. Tudo o que é comprado ou contratado pelo IF, passa por uma licitação ou dispensa da mesma. Para isso,
                        todo um processo admnistrativo é realizado. Porém, muitos dos servidores ainda têm dúvidas sobre o assunto. Para auxiliar com isso, o LicitaIF foi construído, afim de fornecer informações e
                        modelos de documentação utilizados no IF, manuais e informações sobre o Setor de Licitações do Instituto.
                    </p>

                    <div className="title-tec-about">Tecnologias utilizadas no Desenvolvimento</div>
                    <div className="row w-100">
                        <div className="col-4 text-center">
                            <img className="img-about" src="images/ibm-watson-logo.png" style={{width:'70%', paddingTop:'30px'}}></img>
                            <div className="title-tecs">IBM Watson</div>
                            <div className="text-tecs">Watson é a plataforma de serviços cognitivos da IBM para negócios. A cognição consiste no processo que a mente humana utiliza para adquirir conhecimento a partir de informações recebidas.</div>
                        </div>
                        <div className="col-4 text-center">
                            <img className="img-about" src="images/react-logo.png" style={{width:'35%'}}></img>
                            <div className="title-tecs">React JS</div>
                            <div className="text-tecs">React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.</div>
                        </div>
                        <div className="col-4 text-center">
                            <img className="img-about" src="images/nodejs-logo.png" style={{width:'40%', paddingTop:'30px'}}></img>
                            <div className="title-tecs">Node.js</div>
                            <div className="text-tecs">Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis.</div>
                        </div>
                    </div>              
                </div>
            </div>
            
        )
        
    }
}

export default About