import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getDocs } from './documentsActions'

class DocumentsList extends React.Component{
    componentWillMount(){
        this.props.getDocs()
    }

    renderCards(){
        const list = this.props.list || []
        return list.map((doc, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 p2">
                <div className="card">
                    <h4 className="card-title text-center">{doc.name}</h4>
                    <p>{doc.url}</p>
                </div>                    
            </div>
        ))
    }

    render(){
        return(
            <div className="row">
                {this.renderCards()}
            </div>
        )
    }
}




const mapStateToProps = state => ({
    list: state.docs.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({getDocs}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsList)