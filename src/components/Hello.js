import React from 'react'

const Hello = () => { 
    //Using JSX
    return (
        <div id='hello' className='dummyClass'>
            <h1> Hello ATB</h1>
        </div>

    )

    //********Without JSX*************
    // return React.createElement(
    //     'div',
    //     {id: 'hello',className:'dummyClass'},
    //     React.createElement('h1',null,'Hello ATB')
    // )

}

export default Hello