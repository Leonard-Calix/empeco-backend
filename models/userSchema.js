const { Schema, model } = require('mongoose');

let schema = new Schema({
    name : {
        type: String,
        require: true
    },
    lastName  : {
        type: String
    },
    userName  : {
        type: String
    },
    email: {
        type: String
    },
    photo :{
        type: String,
        default : 'https://cookmepal.allianzcloud.com/public/frontend/img/default-img.png'
    },
    password: {
        type: String
    },
    ceationDate:{
        type: Date,
        default: new Date()
    }
});

module.exports = model('User', schema);