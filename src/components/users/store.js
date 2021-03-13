// const USERS_LOADING_10 = 'USERS_LOADING_10';
const USERS_ADD = 'USERS_ADD';

export function add1User(){
    return {
        type:USERS_ADD,
    }
}

const INITIAL_STATE = {
    users:1
}

export default function reducer( state=INITIAL_STATE, action) {
    switch(action.type) {
        case USERS_ADD:
            return{...state, users:state.users+1}
        default: return state;
    }
}