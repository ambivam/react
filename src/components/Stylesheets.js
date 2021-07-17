import React from 'react'
import './myStyle.css'

function Stylesheets({primary}) {

    let className = primary ? 'primary' : ''

    return (
        <div>
            <h1 className={className}>StyleSheets</h1>
        </div>
    )
}

export default Stylesheets
