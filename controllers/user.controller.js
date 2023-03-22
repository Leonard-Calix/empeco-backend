const { request, response } = require("express")
const { getResponse } = require("../helpers/response")
const userModel = require("../models/userSchema");

const create = async (req = request, res = response) => {

    // return res.status(200).json(getResponse('Crear Usuarios'));

    const { userName, email, password } = req.body;

    try {
        const existMail = await userModel.findOne({ email });

        if (existMail) {
            return res.json(getResponse('Ya esta en uso ese correo'));
        }


        const exitsUserName = await userModel.findOne({ userName });

        if (exitsUserName) {
            return res.json(getResponse('Ya esta en uso ese nombre de usuario'));
        }

        const salt = bcrypt.genSaltSync();

        const user = new userModel(req.body);

        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        const token = await generateJWT(user.id, user.userName);

        const data = {
            uid: user.id,
            userName: user.userName,
            token
        };

        res.status(200).json(getResponse('Registro completado', data));

    } catch (error) {
        return res.status(500).json(getResponse("Internal server error", error));
    }
}

const update = (req = request, res = response) => { }

const remove = (req = request, res = response) => { }

const findById = (req = request, res = response) => { }

const findAll = async (req = request, res = response) => {

    const data = await userModel.find();


    return res.status(200).json( {data});
}


module.exports = {
    create,
    update,
    remove,
    findAll,
    findById
}