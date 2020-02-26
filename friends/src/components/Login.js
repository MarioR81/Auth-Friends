import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


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
        // console.log('login func', this.state)
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            // console.log('test', res, this.props)
            window.localStorage.setItem('token', res.data.payload)
            this.props.history.push('/landingPage')
        })
        .catch(err => console.log('error at axios', err));
    };

    render(){
        return (
            <div>
            <h2>Login Form</h2>
                <form onSubmit={this.login}>
                    <input
                        name='username'
                        type='text'
                        placeholder='Login'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <br/>
                    <button>Log In</button>
                    </form>        
            </div>
        );
    }
};

export default Login;