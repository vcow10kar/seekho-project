const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, res) {
            if(err) return reject(err);

            return resolve(err);
        })
    })
}

async function authenticate(req, res, next) {
    const bearerToken = req.headers.authorization;

    if(!bearerToken || !bearerToken.startsWith('Bearer ')) {
        return res.status(400).send({errorMessage: "Please provide a bearer token!"});
    }

    const token = bearerToken.split(" ")[1];

    try{
        const user = await verifyToken(token);

        req.user = user;

        return next();
    } catch(err) {
        res.status(400).send({errorMessage: 'Please provide a valid bearer token!'});
    }
}


module.exports = authenticate;