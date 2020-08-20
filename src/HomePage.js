import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>welcome to your TODO list!</h1>
                <Link className='links' to='/authorize'>Login</Link>
                
            </div>
        )
    }
}
