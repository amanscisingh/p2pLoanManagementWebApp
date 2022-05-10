const initState = {
    loginInfo: {
        isloggedIn: false,
        accesstoken: '',
        refreshToken: '',
        errorMessage: ''
    },
    userInfo: {
        name: '',
        email: '',
        password: '',
        photo: '',
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

        
        default:
            return state;

        }

}

module.exports = rootReducer;