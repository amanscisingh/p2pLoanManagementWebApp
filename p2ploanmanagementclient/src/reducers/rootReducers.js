const initState = {
    userInfo: {}
}


const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state;

        }

}

module.exports = rootReducer;