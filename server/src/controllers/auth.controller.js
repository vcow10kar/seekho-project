const jwt = require('jsonwebtoken');
require('dotenv').config();
const url = require('url');

const User = require('../models/user.model');
const UserBookList = require('../models/userBookList.model');
const ReadingList = require('../models/readingList.model');

const newToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

const signup = async(req, res) => {
    let user;

    try{
        user = await User.findOne({email:req.body.email});

        if(user) {
            let errors = [{
                param: 'email',
                msg: 'Account already exists!'
            }]
            return res.status(200).send({errors: JSON.stringify(errors)});
        }

        user = await User.create(req.body);

        // console.log(user);

        const temp = {
            user: user['_id'],
            book: [],
            academic: []
        }
        let userBookList = await UserBookList.create(temp);
        let readingList = await ReadingList.create(temp);

        const token = newToken(user);

        return res.status(200).send({userid: user._id, token: token, userBookList: userBookList['_id'], readingList: readingList['_id']});
    } catch(err) {
        console.log(err);
        res.status(200).send({message: "Something went wrong! Sorry for inconvinience!"});
    }
}

const signin = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email});

        if(!user) {
            let errors = [{
                param: 'email',
                msg: 'Check your email and password!'
            }]
            return res.status(200).send({errors: JSON.stringify(errors)});
        }

        let match = user.checkPassword(req.body.password);

        if(!match) {
            let errors = [{
                param: 'password',
                msg: 'Incorrect password!'
            }]
            return res.status(200).send({errors: JSON.stringify(errors)});
        }

        // console.log(user);


        let userBookList = await UserBookList.findOne({user : user._id});
        let readingList = await ReadingList.findOne({user : user._id});

        const token = newToken(user);

        return res.status(200).send({userid: user._id, token: token, userBookList: userBookList._id, readingList: readingList._id});

        
    } catch(err) {
        console.log(err);
        res.status(200).send({message: "Something went wrong! Sorry for inconvinience!"});
    }
}

module.exports = {signup, signin, newToken};