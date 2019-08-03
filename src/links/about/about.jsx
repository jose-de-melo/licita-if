import React from 'react'


class About extends React.Component{
    render(){
        return(
            <div>
                <h1 className="cover-heading" style={{color:'#7b1fa2', marginBottom: '1%', fontSize:'70px',marginTop:'150px', textAlign:'center'}}>Sobre o LicitaIF</h1>
                <div className="jumbotron w-75 mx-auto text-justify" style={{fontSize:"25px"}}> 
                    O LicitaIF foi desenvolvido para ser o trabalho final do curso 'Chatbots: da teoria ao deploy, com IBM Watson' do projeto de extensão 'Laboratório de Redes de Conhecimento', do Instituto Federal do Sudeste de Minas Gerais, <i>campus</i> Barbacena.
                    <p style={{marginTop:"3%"}}>
                        O objetivo era construir um site simples, com ótima usabilidade e de fácil compreensão para ajudar os servidores do Instituto com Licitações. Tudo o que é comprado ou contratado pelo IF, passa por uma licitação ou dispensa da mesma. Para isso,
                        todo um processo admnistrativo é realizado. Porém, muitos dos servidores ainda têm dúvidas sobre o assunto. Para auxiliar com isso, o LicitaIF foi construído, afim de fornecer informações e
                        modelos de documentação utilizados no IF, manuais e informações sobre o Setor de Licitações do Instituto.
                    </p>                
                </div>
            </div>
            
        )
        
    }
}

export default About