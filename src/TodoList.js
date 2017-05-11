import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
    }

    handleDeleteTask(id) {
        this.props.onDeleteTask(id);
    }

    handleCompleteTask(id) {
        this.props.onCompleteTask(id);
    }

    render() {
        const listItems = this.props.todos.map((todo) =>
            <ListItem
                key={todo.id}
                todo={todo}
                onDeleteTask={this.handleDeleteTask}
                onCompleteTask={this.handleCompleteTask}
            />);
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default TodoList;