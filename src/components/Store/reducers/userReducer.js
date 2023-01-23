const INITIAL_STATE = {}

function userReduser(state = INITIAL_STATE, action) {

    switch (action.type) {

    case "SET_USER_DATA": return{...state, ...action.payload}
    case "REMOVE_USER_DATA": return {...action.payload}
    default : return state;
    }
}


export default userReduser;