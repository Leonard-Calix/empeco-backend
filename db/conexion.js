const mongoose = require("mongoose");
require("dotenv").config();

const urlApiDev = `${process.env.URL_API_DEV}`;

class Database {
    constructor() {
        this.conectar();
    }

    async conectar() {
        try {
            mongoose.set('strictQuery', true);
            await mongoose.connect(urlApiDev);
            console.log('Conexion lista')
        } catch (error) {
            console.error(JSON.stringify(error))
        }
    }

    async conexionMongoAtlas() {
        try {
            await mongoose.connect(`mongodb+srv://leonardo:calix1994@bloggerweb-ykwq4.mongodb.net/BloggerWeb?retryWrites=true&w=majority`);
        } catch (error) {
            console.error(JSON.stringify(error));
        }
    }
}

//A01LINNO6347\SQLEXPRESS

module.exports = new Database();