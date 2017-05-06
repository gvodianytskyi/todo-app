import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {id: this.props.location.state.id, task: this.props.location.state.task};
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSave = this.handleClickSave.bind(this);
    }

    handleChange(e) {
        this.setState({task: e.target.value});
    }

    handleClickSave() {
        this.props.onSaveItem(this.state.id, this.state.task);
        this.props.history.push('./../..');
    }

    render() {
        return (
            <form
                className="form">
                <input
                    className="form-control input_task"
                    type="text"
                    name="editTaskInput"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <input
                    className="btn btn-primary btn_submit"
                    value="Save"
                    onClick={this.handleClickSave}
                    readOnly
                />
                <Link to="./../..">
                    <input
                        className="btn btn-primary btn_submit"
                        value="Cancel"
                        readOnly/>
                </Link>
            </form>
        );
    }
}

export default EditItem;