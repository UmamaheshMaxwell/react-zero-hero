import React, { Component } from 'react'

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
             students :[],
             id: '',
             name: '',
             email: '',
             city: ''
        }
    }

    componentDidMount(){
        this.getStudents()
    }

    clearForm(){
        this.setState({
            name: '',
            email: '', 
            city: ''
        })
    }

    /*
        * CRUD Opeartions 
        ? C - CREATE
        ? R - READ
        ? U - UPDATE
        ? D - DELETE

    */
    // ? Reading the data
    getStudents(){
        fetch("http://localhost:5001/api/student")
        .then(response => response.json())
        .then(data => this.setState({students: data}))
    }

    // ? Creating the data
    addStudent = () =>{
        const postData = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                Name: this.state.name,
                Email: this.state.email,
                City: this.state.city
            })
        }

        fetch("http://localhost:5001/api/student", postData)
        .then(response => response.json())
        .then(data => {
            this.clearForm()
            this.getStudents()
        })
    }

    // ? UPDATE the data

    editStudent=(id) =>{
        fetch(`http://localhost:5001/api/student/${id}`)
        .then(response => response.json())
        .then(data => this.setState({
            id: data[0].Id,
            name: data[0].Name,
            email: data[0].Email,
            city: data[0].City
        }))
    }

    updateStudent = () =>{
        const putData = {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                Name: this.state.name,
                Email: this.state.email,
                City: this.state.city
            })
        }

        fetch(`http://localhost:5001/api/student/${this.state.id}`, putData)
        .then(response => response.json())
        .then(data => {
            this.clearForm()
            this.getStudents()
        })
    }

    // ? DELETE tha data
    deleteStudent = (id) =>{
        const deleteData = {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        }

        fetch(`http://localhost:5001/api/student/${id}`, deleteData)
        .then(response => response.json())
        .then(data => {this.getStudents()})
    }

    
    render() {
        return (
            <div className="container">
                <h2>Student List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>
                                <input type="text" 
                                       value={this.state.name} 
                                       onChange={(event) =>this.setState({name: event.target.value})} 
                                />
                            </th>
                            <th>
                                <input type="text" 
                                       value={this.state.email}  
                                       onChange={(event) =>this.setState({email: event.target.value})}
                                />
                            </th>
                            <th>
                                <input type="text" 
                                       value={this.state.city} 
                                       onChange={(event) =>this.setState({city: event.target.value})}
                                />
                            </th>
                            <th>
                                <button className="btn btn-primary" onClick={this.addStudent}>Add</button> &nbsp;&nbsp;
                                <button className="btn btn-warning" onClick={this.updateStudent}>Update</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student.Id}>
                                    <td>{student.Id}</td>
                                    <td>{student.Name}</td>
                                    <td>{student.Email}</td>
                                    <td>{student.City}</td>
                                    <td>
                                        <button className="btn btn-warning" 
                                                onClick={()=> this.editStudent(student.Id)}
                                        >Edit
                                        </button>&nbsp;&nbsp;
                                        <button className="btn btn-danger"
                                                onClick={()=> this.deleteStudent(student.Id)}
                                        >Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student
