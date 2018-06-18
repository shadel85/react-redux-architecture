import * as ActionType from '../Constants/ActionType';
import initialState from '../reducer/initialState';


const authorReducer = (state = initialState.authorReducer, action) => {
    switch(action.type) {
        case ActionType.GET_AUTHORS_RESPONSE:
            return {...state, authors: Object.assign([], action.authors)};

        default: return state;
    }
};


export default authorReducer;