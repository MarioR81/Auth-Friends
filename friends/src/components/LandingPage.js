import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import FriendsForm from './FriendsForm';

class LandingPage extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
        .get('/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log('error at axios', err))
    };

    render() {
    return (
        <div>
            <h3>Friends!</h3>
            <FriendsForm />
        </div>
    )
    }
};

export default LandingPage;