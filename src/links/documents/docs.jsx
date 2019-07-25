import React from 'react'
import DocumentsList from './documentsList'

class Docs extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="inner cover">
                    <h1 className="cover-heading" style={{color:'#7b1fa2', marginBottom: '3%', fontSize:'70px'}}>Manuais e Documentos</h1>
                    <DocumentsList />
                </div>
            </div>
        )
    }
}

export default Docs