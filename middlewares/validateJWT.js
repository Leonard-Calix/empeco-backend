const { request, response } = require("express");
const jwt = require('jsonwebtoken');
const config = require("../config");
const { getResponse } = require('../helpers/response');

const validateJWT = (req = request, res = response, netx) => {
    const token = req.header('x-token');


    if (!token) {
        return res.status(401).json(getResponse('No hay token'));
    }

    try {

        const payload = jwt.verify(token, config.SECRECT_KEY);

        const { id, userName } = payload;

        req.id = id;
        req.userName = userName;

    } catch (error) {
        return res.status(401).json(getResponse('Token no valido'));
    }

    netx();
}

module.exports = {
    validateJWT
}