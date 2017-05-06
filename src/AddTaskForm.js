import React, { Component } from 'react';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.value) {
            return;
        }
        this.props.onAddTask(this.state.value);
        this.setState({value: ''});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return(
            <form
                className="form"
                onSubmit={this.handleSubmit}>
                <input
                    className="form-control input_task"
                    type="text"
                    name="addTaskInput"
                    placeholder="Enter task name..."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input
                    className="btn btn-primary btn_submit"
                    type="submit"
                    value="Add" />
            </form>
        );
    }
}

export default AddTaskForm;