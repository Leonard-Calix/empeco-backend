const express = require('express');
//const { seeders } = require('./database/seeders');
require('./db/conexion');
const cors = require('cors');
const app = express();
const { PORT } = require('./config');


app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//seeders();

app.use('/api/users', require('./routers/user.router'));
//app.use('/api/auth', require('./routers/auth.router'));


app.listen(PORT, () => console.log('Server on port http://localhost:4000/'))