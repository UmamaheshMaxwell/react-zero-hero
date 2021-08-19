import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => this.setState({todos: data}))
    }
    

    render() {
        return (
            <div className="container">
                <h1>List of Todos</h1>
                {
                    this.state.todos.map(todo =>(
                        <ul key={todo.id}>
                            <li>{todo.userId}</li>
                            <li>{todo.id}</li>
                            <li>{todo.title}</li>
                            <li>{todo.completed ? "True" : "False"}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Todo
