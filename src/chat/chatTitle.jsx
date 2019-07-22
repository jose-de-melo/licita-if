import React from 'react'
import {FaRobot} from 'react-icons/fa'


export default props => (
    <div className="top_menu">
        <div className="buttons">
            <div className="button close">✖</div>
            <div className="button minimize">▬</div>
            <div className="button maximize">■</div>
        </div>
        <div className="title"> <FaRobot /> BIL</div>
    </div>
)

