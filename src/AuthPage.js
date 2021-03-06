import React, { Component } from 'react'
import { signIn, signUp } from './todo-api.js';

export default class AuthPage extends Component {

    state = {
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todo');
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/todo');
    }


    render() {
        return (
            <div className='forms'>
                <form onSubmit={this.handleSignIn}>
                    Sign in
                    <label>
                        Email
                        <input onChange={e => this.setState({ signInEmail: e.target.value })} value= {this.state.signInEmail}/>
                    </label>
                    <label>
                        Password 
                        <input type='password' onChange={e => this.setState({ signInPassword: e.target.value })} value={this.state.signInPassword}/>
                    </label>
                    <button>Submit</button>   
                </form>
                <form onSubmit={this.handleSignUp}>
                    Sign up
                    <label>
                        Email
                        <input onChange={e => this.setState({ signUpEmail: e.target.value })} value= {this.state.signUpEmail}/>
                    </label>
                    <label>
                        Password 
                        <input type='password' onChange={e => this.setState({ signUpPassword: e.target.value })} value={this.state.signUpPassword}/>
                    </label>
                    <button>Submit</button>   
                </form>
                
            </div>
        )
    }
}
