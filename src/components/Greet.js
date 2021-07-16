import React from 'react'

// function Greet(){
//     return <h1>Hello RajaniKanth </h1>
// }

//**********Using props*******************
// const Greet = (props) => {
//     console.log(props)
//     return (
//     <div>
//         <h1>Hello {props.name} a.k.a {props.likes}</h1>
//         {props.children}
//     </div>
//     )
// }
//**********Using Destructuring Props******
const Greet = ({name,likes}) => {
    console.log()
    return (
    <div>
        <h1>Hello {name} a.k.a {likes}</h1>
    </div>
    )
}

export default Greet