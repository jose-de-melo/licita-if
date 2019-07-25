import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {FaFileDownload, FaDownload} from 'react-icons/fa'

import { getDocs } from './documentsActions'

class DocumentsList extends React.Component{
    componentWillMount(){
        this.props.getDocs()
    }

    renderCards(){
        const list = this.props.list || []

        return (list.map((doc, index) => (
                    <li key={index} className="list-group-item docs">
                        <div className="content-item-list-left text-wrap">
                            <h4 className="title-item-list">{doc.name}</h4>
                            <p className="description-item-list">{doc.description}</p>
                        </div>

                        <div className="content-item-list-rigth">
                            <div className={`text-capitalize type-doc ${doc.type_doc}`}>{doc.type_doc}</div>
                            <a href={`${doc.url}`} className="text-reset link-doc">Download <FaFileDownload/> </a>
                        </div>
                       
                    </li>
                ))
        )
    }

    render(){
        return(
            <ul className="list-group mx-auto">
                {this.renderCards()}
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