import React from 'react';

const FriendsList = props => {
    console.log('list', props)
    return (
        <div>
            <h3>List</h3>
                <h3>{props.name}</h3>
        </div>
    );
};

export default FriendsList