import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }


    render() {

        let message

        if(this.state.isLoggedIn){
            message = <div>Welcome Rajani Kanth</div>
        }else{
            message = <div>Welcome Guests</div>
        }

        return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome RajaniKanth
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guests
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome RajaniKanth</div>
        //         <div>Welcome Guests</div>
        //     </div>
        // )
    }
}

export default UserGreeting
