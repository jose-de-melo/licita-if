import React from 'react'
import faqs from '../faqs/faqsList.json'

class FAQS extends React.Component{
    renderTags(faq){
        return faq.tags.map((item, index) => (
            <div key={index} className="faq-tag badge">
                {item}
            </div>
        ))
    }


    renderFAQs(){
        return faqs.list.map((item, index) =>(
            <div key={index} id={`#${item.id}`} className="mx-auto w-85">
                <div className="faq-container w-100 clearfix">
                    <div className="faqs-content">
                        <div className="faq-pergunta">
                            {item.pergunta}
                        </div>
                            
                        <div className="faq-resposta alert">
                            <span className="label-resp">Resposta:</span> {item.resposta}
                        </div>
                    </div>

                    
                    <div className="faq-tags">
                        <span className="d-flex flex-row flex-wrap">
                            {this.renderTags(item)}
                        </span>
                    </div>
                </div> 
            </div>
            
        ))
    }


    render(){
        const divsFaqs = this.renderFAQs()
        return(
            <div>
                <h1 className="cover-heading" style={{color:'#7b1fa2', marginBottom: '3%', fontSize:'70px',marginTop:'120px', textAlign:'center'}}>FAQs (Perguntas Frequentes)</h1>
                {divsFaqs}
            </div>
        )
    }
}

export default FAQS