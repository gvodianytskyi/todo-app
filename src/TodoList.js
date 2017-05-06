import React, { Component } from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    handleDeleteTask(id) {
        this.props.onDeleteTask(id);
    }

    render() {
        const listItems = this.props.todos.map((todo) =>
            <ListItem
                key={todo.id}
                id={todo.id}
                task={todo.task}
                onDeleteTask={this.handleDeleteTask}
            />);
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default TodoList;