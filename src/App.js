import React, { Component } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom';
import HomePage from './HomePage.js';
import AuthPage from './AuthPage.js';
import TodoPage from './TodoPage.js';
import './App.css';

export default class App extends Component {
  state = {
    token: localStorage.getItem('token'),
  }

  handleToken = (token) => {
this.setState({ token: token })
localStorage.setItem( 'token', token)
  }

  clearToken = () => {
    this.setState({ token: ''})

    localStorage.setItem('token', '')
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
                    <main>

                    <div className="sidebar">
                    
                    
                    </div>
                    <div className="content">
                    <Switch>
                    
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/authorize" 
                            exact
                            render={(routerProps) => <AuthPage handleToken={this.handleToken} {...routerProps} />} 
                        />
                        <Route 
                            path="/todo" 
                            exact
                            render={(routerProps) => <TodoPage token={this.state.token} {...routerProps} />} 
                        />
                    </Switch>
                    </div>
                    
                    </main>
                    </Router>
      </header>
    </div>
  );
}

}
