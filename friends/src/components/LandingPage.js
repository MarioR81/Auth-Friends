import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const LandingPage = () => {
   const [state, setState] = useState([]);

   useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setState(res.data)
        })
        .catch(err => console.log('error at axios', err.message))
   }, []);

    console.log(state);

    return (
        <div>
            <h3>Landing Page</h3>


            {state.map(friend => {
                return (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>
                )
            })}
            
        </div>
    )
};

export default LandingPage;