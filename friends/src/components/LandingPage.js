import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

import FriendsList from './FriendsList';
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
        .then(res => {
            console.log('axios', res.data)
            this.setState(res.data)
            // this.state.friends.map(friend => {

            // })
        })
        .catch(err => console.log('error at axios', err))
    }
    

    render() {
    return (
        <div>
            <h3>Landing Page</h3>
            <FriendsList props={this.state}/>
            
        </div>
    )
    }
};


export default LandingPage;