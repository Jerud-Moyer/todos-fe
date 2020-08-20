import React, { Component } from 'react'
import { fetchTodos, createTodo } from './todo-api.js';


export default class TodoPage extends Component {

    state= {
        todos: []
    }
    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/authorize');
        } else {
           const data = await fetchTodos(this.props.token)

           this.setState({
               todos: data.body
           })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await createTodo({
                todo: this.state.todo,
            });
            this.setState({
                todo: '',
                completed: false
            });

        } catch(e) {
            console.log(e.message)
        }
    }

    handleNewTodo = e => {
        this.setState({ todo: e.target.value });
    }
    render() {
        return (
            <div className='todos'>
                <form>
                    add a ToDo!
                    <label>
                       ToDo:
                       <input onChange={this.handleNewTodo} value={this.state.todo}></input> 
                    </label>
                </form>
                {
                    this.state.todos.map((todo) => {
                        return <div className='todo-box'> <p key={this.state.todo}>ToDo: {todo.todo}</p>
                        <p key={this.state.completed}>Completed? {todo.completed}</p></div>

                    })
                }
                
            </div>
        )
    }
}
