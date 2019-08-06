import React from 'react'
import DocumentsList from './documentsList'

class Docs extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h1 className="cover-heading title-docs">Manuais e Documentos</h1>
                    <DocumentsList />
                </div>
            </div>
        )
    }
}

export default Docs