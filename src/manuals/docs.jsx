import React from 'react'
import DocumentsList from '../links/documents/documentsList'

class Docs extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="inner cover">
                    <h1 className="cover-heading">Manuais e Documentos</h1>
                    <DocumentsList />
                </div>
            </div>
        )
    }
}

export default Docs