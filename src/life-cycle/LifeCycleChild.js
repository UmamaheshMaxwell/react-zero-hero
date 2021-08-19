import React, { Component } from 'react'

class LifeCycleChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycle of Child - Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle of Child - getDirivedStateFromProps')
        return {}
    }
    
    componentDidMount(){
        console.log('LifeCycle of Child - componentDidMount')
    }
    render() {
        console.log('LifeCycle of Child - render')
        return (
            <div>
                <h1>LifeCycle methods of Child</h1>
            </div>
        )
    }
}

export default LifeCycleChild
