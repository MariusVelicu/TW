import React from 'react';

export default  class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
            taskPriority: 'low',
            taskDuration: 0
        };
    }
  handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
  
    render(){
        return (
        <div>
                <input id="task-name"  name="task-name" onChange={this.handleChange} />
                 <input id="task-priority"  name="task-priority" onChange={this.handleChange} />
                 <input id="task-duration"  name="task-duration" onChange={this.handleChange}/>
                 <input type="button" value="add task" onClick={this.addTask}/>
        </div>
        );
    }

  addTask = () => {
        let task = {...this.state};
        this.props.taskAdded(task);
    }
}
