import React from 'react'

// function Greet(){
//     return <h1>Hello RajaniKanth </h1>
// }

const Greet = (props) => {
    console.log(props)
    return <h1>Hello {props.name} a.k.a {props.likes}</h1>
}

export default Greet