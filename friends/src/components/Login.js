import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state={
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        console.log('login func', this.state)
        axios
        .post('http://localhost:5000/api/friends', this.state.credentials)
        .then(res => console.log(res))
        .catch(err => console.log('error at axios', err));
    };

    render(){
        return (
            <>
            <h2>Login Form</h2>
                <form onSubmit={this.login}>
                    <input
                        name='username'
                        placeholder='Login'
                        type='text'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        name='password'
                        placeholder='Password'
                        type='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Log In</button>
                    </form>        
            </>
        )
    }
};

export default Login;