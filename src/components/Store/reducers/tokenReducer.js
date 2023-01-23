
const INITIAL_STATE = {};


function tokenReducer (state= INITIAL_STATE, action) {

    switch (action.type) {
        case "SET_TOKEN": return {...state, token: action.payload};
        case "REMOVE_TOKEN": return {};
        default: return state;
    }
}

export default tokenReducer;