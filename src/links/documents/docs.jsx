import React from 'react'
import DocumentsList from './documentsList'

class Docs extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h1 className="cover-heading" style={{color:'#7b1fa2', marginBottom: '1%', fontSize:'70px',marginTop:'150px', textAlign:'center'}}>Manuais e Documentos</h1>
                    <DocumentsList />
                </div>
            </div>
        )
    }
}

export default Docs