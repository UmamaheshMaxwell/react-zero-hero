import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild'

class LifeCycleParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycle of Parent - Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycle of Parent - getDirivedStateFromProps')
        return {}
    }
    
    componentDidMount(){
        console.log('LifeCycle of Parent - componentDidMount')
    }
    render() {
        console.log('LifeCycle of Parent - render')
        return (
            <div>
                <h1>LifeCycle methods of Parent</h1>
                <LifeCycleChild />
            </div>
        )
    }
}

export default LifeCycleParent
