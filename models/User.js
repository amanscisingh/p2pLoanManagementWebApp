const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bankDetails: {
        bankName: {
            type: String,
        },
        accountNumber: {
            type: String,
        },
        ifscCode: {
            type: String,
        }
    },
    panDetails:{
        panNo: {
            type: String,
        },
        panImage: {
            type: String,
        }
    },
    adhaarDetails:{
        adhaarNo: {
            type: String,
        },
        adhaarImage: {
            type: String,
        }
    },
    salerySlips: [
        {
            amount: {
                type: Number,
            },
            date: {
                type: Date,
                default: Date.now()
            },
            salerySlipImage: {
                type: String,
            }
        }
    ],
    ctcInformation: {
        ctc: {
            type: Number,
        },
    },
    generalQuestions: {
        
    }
}, 
{
    timestamps: true,
    collection:'users'
});

module.exports = mongoose.model('User', usersSchema);