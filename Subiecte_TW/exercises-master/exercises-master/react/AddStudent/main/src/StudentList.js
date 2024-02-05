import React from 'react';
import AddStudent from './AddStudent';


export class StudentList extends React.Component {
    constructor(){
        super();
        this.state = {
            students: []
        };
        
      this.addStudent = (student) => {
            var students1=this.state.students;
            students1.push(student);
            this.setState=({
                students:students1
            })
        }
    }

    render(){
        return (
            <div>
        	<AddStudent onAdd={this.addStudent}/>

            </div>
        )
    }
}