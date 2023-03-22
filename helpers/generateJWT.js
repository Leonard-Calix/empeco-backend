const jwt = require('jsonwebtoken');
const config = require('../config');

const generateJWT = (id, userName) => {

    const secretKey = `${config.SECRECT_KEY}`;

    return new Promise((resolve, reject) => {
        const payload = { id, userName }

        jwt.sign(payload, secretKey, {
            expiresIn: '2h'
        }, (error, token) => {
            
            if (error) {
                reject('No se pudo crear el token');
            }
            resolve(token);
        });
    });

}

module.exports = {
    generateJWT
};