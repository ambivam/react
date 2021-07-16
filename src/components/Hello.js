import React from 'react'

const Hello = () => { 
    //Using JSX
    // return (
    //     <div>
    //         <h1> Hello ATB</h1>
    //     </div>

    // )

    //********Without JSX*************
    return React.createElement('div',null,React.createElement('h1',null,'Hello ATB'))

}

export default Hello