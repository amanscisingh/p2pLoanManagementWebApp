const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10);

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            res.json({ status: false, message: 'User already exists' });
        } else {
            let user = new User({
                email: req.body.email,
                name: req.body.name,
                password: hashedPass
            });
    
            try {
                await user.save();
                res.status(201).json({
                    status: true,
                    message: 'User created successfully',
                    user: user
                });   
            } catch (error) {
                res.status(500).json({
                    status: false,
                    message: error.message
                });
            }        
        }

    } catch (error) {  // catching the error in hashing finction of bcryptj
        res.json({ status: false, message: error });
    }
}

const login  = async (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            try {
                const isMatch = await bcrypt.compare(password, existingUser.password);
                if (isMatch) {
                    const token = jwt.sign({
                        email: existingUser.email,
                        userId: existingUser._id
                    }, 'thesecretvalue', { expiresIn: '1h' });

                    const refreshToken = jwt.sign({
                        email: existingUser.email,
                        userId: existingUser._id
                    }, 'thesecretrefreshtoken', { expiresIn: '48h' });

                    res.json({
                        status: true,
                        message: 'User logged in successfully',
                        token,
                        refreshToken
                    });
                } else {
                    res.json({ status: false, message: 'Password does not matched' });
                }
            } catch (error) {
                res.json({ status: false, message: error.message });
            }


        } else {
            res.json({ status: false, message: 'User not registered with this email' });
        }
        
    } catch (error) {
        res.json({ status: false, message: error.message });
    }

}

const logout = (req, res, next) => {
    // DESTROY THE TOKEN
    res.json({ status: true, message: 'User logged out successfully' });
}

const refreshToken = (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    jwt.verify(refreshToken, 'thesecretrefreshtoken', (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: false,
                err, 
                message: 'Invalid refresh token'
            });
        } else {
            const token = jwt.sign({
                email: decoded.email,
                userId: decoded.userId
            }, 'thesecretvalue', { expiresIn: '1h' });
            res.json({
                status: true,
                message: 'Token refreshed successfully',
                token,
                refreshToken
            });
        }

    })
}

module.exports = { register,login, refreshToken };