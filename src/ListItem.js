import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickComplete = this.handleClickComplete.bind(this);
    }

    handleClickDelete(e) {
        this.props.onDeleteTask(this.props.todo.id);
        e.preventDefault();
    }

    handleClickComplete() {
        this.props.onCompleteTask(this.props.todo.id);
    }

    render() {
        return <li>
            <span className={this.props.todo.done ? 'todo__task_crossed' : 'todo__task_regular'}>
                {this.props.todo.task}
            </span>

            {!this.props.todo.done &&
                <a
                    className="link"
                    title="Complete"
                    onClick={this.handleClickComplete}>
                    <i className="fa fa-check link-icon" aria-hidden="true"></i>
                </a>
            }

            <Link  className="link"
                   title="edit"
                   to={{ pathname: `edit/${this.props.todo.id}`, state: { id: this.props.todo.id, task: this.props.todo.task } }}>
                <i className="fa fa-pencil link-icon" aria-hidden="true"></i>
            </Link>

            <a
                className="link"
                title="Delete"
                onClick={this.handleClickDelete}>
                <i className="fa fa-times link-icon" aria-hidden="true"></i>
            </a>
        </li>
    }
}

export default ListItem;