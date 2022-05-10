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
    }
}, 
{
    timestamps: true,
    collection:'users'
});

module.exports = mongoose.model('User', usersSchema);