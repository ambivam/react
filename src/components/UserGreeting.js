import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome RajaniKanth
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guests
                </div>
            )
        }

        // return (
        //     <div>
        //         <div>Welcome RajaniKanth</div>
        //         <div>Welcome Guests</div>
        //     </div>
        // )
    }
}

export default UserGreeting
