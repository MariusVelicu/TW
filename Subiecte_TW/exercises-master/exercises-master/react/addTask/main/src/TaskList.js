import React from 'react';
import AddTask from './AddTask';

export default class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
          this.addTask = (task) => {
            var task1=this.state.data;
            task1.push(task);
            this.setState=({
                task:task1
            })
        }
    }

    render() {
        return (
            <div>
             <AddTask taskAdded={this.addTask} />
            </div>
        );
    }
}