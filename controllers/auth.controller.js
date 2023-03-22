const { request, response } = require("express");
const { getResponse } = require("../helpers/response");
const userModel = require("../models/userSchema");

const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(500).json(getResponse('El nombre de usuario no existe'));
        }

        const validatePassword = bcrypt.compareSync(password, user.password);

        if (!validatePassword) {
            return res.status(500).json(getResponse('Contraseña invalida'));
        }

        const token = await generateJWT(user.id, user.userName);

        const data = {
            id: user.id,
            userName: user.userName,
            token
        }

        res.json(getResponse('Usuario valido', data));

    } catch (error) {
        return res.status(500).json(getResponse("Internal server error", JSON.stringify(error)));
    }


}

module.exports = {
    login
}