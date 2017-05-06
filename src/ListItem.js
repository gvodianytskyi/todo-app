import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete(e) {
        this.props.onDeleteTask(this.props.id);
        e.preventDefault();
    }

    render() {
        return <li>
            <span>{this.props.task}</span>
            <a
                className="link"
                title="Delete"
                onClick={this.handleClickDelete}> ×
            </a>

            <Link to={{ pathname: `edit/${this.props.id}`, state: { id: this.props.id, task: this.props.task } }}>edit</Link>
        </li>
    }
}

export default ListItem;