import React, {Component} from 'react'

class Welcome extends Component{
    // render(){
    //     return (
    //     <div>
    //         <h1> Welcome {this.props.name} a.k.a {this.props.likes}</h1>
    //         {this.props.children}
    //     </div>
    //     )
    // }

    //Destructuring props in class
    render(){
        const {name,likes} = this.props
        //const {state1,state2} = this.state
        return (
        <div>
            <h1> Welcome {name} a.k.a {likes}</h1>
            
        </div>
        )
    }
}

export default Welcome
