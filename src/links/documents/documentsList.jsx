import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {FaFileDownload} from 'react-icons/fa'

import { getDocs } from './documentsActions'

class DocumentsList extends React.Component{
    componentWillMount(){
        this.props.getDocs()
    }

    renderDocs(){
        const list = this.props.list || []

        if(list.length < 0){
            return (list.map((doc, index) => (
                <li key={index} className="list-group-item docs text-center">
                    <div className="content-item-list-left text-wrap w-85">
                        <h4 className="title-item-list">{doc.name}</h4>
                        <p className="description-item-list text-wrap pr-5">{doc.description}</p>
                    </div>

                    <div className="content-item-list-rigth w-15 pl-5">
                        <div className={`text-capitalize type-doc ${doc.type_doc.replace(' ', '-')}`}>{doc.type_doc}</div>
                        <a href={`${doc.url}`} className="text-reset link-doc">Download <FaFileDownload/> </a>
                    </div>
                   
                </li>
                ))
            )
        }
        else{
            return(
                <div className="alert alert-danger message-no-docs">
                    <div>
                        Nenhum arquivo disponível no momento!
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <ul className="list-group mx-auto mb-4 w-75 p-3 list-docs">
                {this.renderDocs()}
            </ul>
        )
    }
}




const mapStateToProps = state => ({
    list: state.docs.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getDocs}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsList)