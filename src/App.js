import React, { Component } from 'react';

import Home from './Home';
import Utils from './Utils';
import EditItem from './EditItem';
import { Route, HashRouter, Switch } from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: TODOS};
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleSaveItem = this.handleSaveItem.bind(this);
        this.handleCompleteTask = this.handleCompleteTask.bind(this);
    }

    handleAddTask(task) {
        const todos = this.state.todos;
        const newId = Utils.generateNextId(todos.map((item) => item.id));
        this.setState({todos: todos.concat({id: newId, task, done: false})});
    }

    handleDeleteTask(id) {
        let todos = this.state.todos;
        Utils.removeItemById(todos, id);
        this.setState({todos});
    }

    handleSaveItem(id, value) {
        let todos = this.state.todos;
        let index = todos.findIndex(task => String(task.id) === String(id));
        todos[index].task = value;
        this.setState({todos});
    }

    handleCompleteTask(id) {
        let todos = this.state.todos;
        todos.find(task => task.id === id).done = true;
        this.setState({todos});
        console.log(this.state.todos);
    }

    render() {
        return(
            <div className="container">
                <h1>Todo App</h1>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={() =>
                            (<Home
                                todos={this.state.todos}
                                onDeleteTask={this.handleDeleteTask}
                                onAddTask={this.handleAddTask}
                                onCompleteTask={this.handleCompleteTask}
                             />)
                             }
                        />}
                        <Route path='/edit/:id' component={(props) =>
                            (<EditItem onSaveItem={this.handleSaveItem} {...props}/>)}
                        />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

let TODOS = [
    { id: 1, task: "do smth", done: false },
    { id: 2, task: "go for a walk", done: false }
];

export default App;
