import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'RajaniKanth'
        }

        console.log('LifecycleB constructor')

    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }

    render() {
        console.log('Lifecycle B Render')
        return (            
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
