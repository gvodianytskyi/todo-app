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

            <Link  className="link"
                   title="edit"
                   to={{ pathname: `edit/${this.props.id}`, state: { id: this.props.id, task: this.props.task } }}>
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