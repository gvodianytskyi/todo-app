import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import TodoList from './TodoList';

class Home extends Component{
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
    }

    handleAddTask(task) {
        this.props.onAddTask(task);
    }

    handleDeleteTask(id) {
        this.props.onDeleteTask(id);
    }

    handleCompleteTask(id) {
        this.props.onCompleteTask(id);
    }
    
    render() {
        return (
            <div>
                <AddTaskForm
                    onAddTask={this.handleAddTask}/>
                <TodoList
                    todos={this.props.todos}
                    onDeleteTask={this.handleDeleteTask}
                    onCompleteTask={this.handleCompleteTask}/>
            </div>
        );
    }
}


export default Home;