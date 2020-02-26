import {FETCH_DATA} from '../actions/';


const initialState = {
    friends: [],
    isFetchingData: false
};

export const FriendsReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        default:
            return state;
    }
}