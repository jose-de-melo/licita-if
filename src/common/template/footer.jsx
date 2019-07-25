import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default props => (
   <footer className="footer mt-auto py-3">
       <div className="inner">
            <p>© 2019 LicitaIF, made by <a href="https://github.com/jose-de-melo" target="_blank">{props.nome}</a> </p>
            <p style={{fontSize: '35px'}}><FaGithub /></p>
       </div>
   </footer>
)