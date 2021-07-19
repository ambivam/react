import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'RajaniKanth'
        }

        console.log('LifecycleA constructor')

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    render() {
        console.log('Lifecycle A Render')
        return (            
            <div>
                Lifecycle A
            </div>
        )
    }
}

export default LifecycleA
