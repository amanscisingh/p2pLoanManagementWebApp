const initState = {
    loginInfo: {
        isloggedIn: true,
        accesstoken: '',
        refreshToken: '',
        errorMessage: ''
    },
    userInfo: {
        name: 'Aman Singh',
        email: '',
        password: '',
        photo: 'https://lh3.googleusercontent.com/a-/AOh14GhM9pnIzKnvUrfBXFlCn3jNP7qNpJA08bedkyHwew=s360-p-rw-no',
        _id: '',
        isAccountComplete: false,
        cibilScore: '',
        x1: '',
        x2: '',
        x3: '',
        x4: '',
        x5: '',
        x6: '',
        bankDetails: {
            adhaar: {
                number: '',
                document: '',
            },
            pan: {
                number: '',
                document: '',
            },
            bank: {
                name: '',
                accountNumber: '',
                ifsc: '',
            },
            salarySlip: [ // { amount, documentproof }
                
            ],
            ctc: {
                amount: '',
            }
        }
    },
    loans: [],
    appControls: {
        isSyncing: false,
        isLoading: false,
        isError: false,
        controllerMode: 'approve', // approve, apply, profile
    }
}


const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case 'UPDATE_EMAIL':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    email: action.payload
                }
            }

        case 'UPDATE_PASSWORD':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    password: action.payload
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_APPROVE':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'approve'
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_PROFILE':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'profile'
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_APPLY':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'apply'
                }
            }

        
        default:
            return state;

        }

}

module.exports = rootReducer;