import React from 'react';
import axios from 'axios';

class LandingPage extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token');
        axios
        .get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log('error at axios', err))
    };

    render() {
    return (
        <div>
            <h3>Landing Page!</h3>
        </div>
    )
    }
};

export default LandingPage;