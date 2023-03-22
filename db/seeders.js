const PeliculaSchema = require("../models/PeliculaSchema");

const seeders = async () => {
    try {

        const data = [
            {
                nombre: 'Hasta el último hombre',
                descripcion: 'Hasta el último hombre (en inglés, Hacksaw Ridge) es una película dramática y bélica estadounidense de 2016',
                urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLWYBJq2Ky0KJb8gRrARHeHuRHbjha5YulYP-40G1SpAQzEWS',
                calificaion: 4.5,
                fechaEstreno: '10-10-2016'
            },
            {
                nombre: 'Capitán América: el primer vengador',
                descripcion: 'Inicio del caapitan america',
                urlImagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ9bzgPehP3vvkuul9oNnk3bX6TjclMtVjLWM9S3GvtHknLHCBX',
                calificaion: 5,
                fechaEstreno: '10-10-2011'
            }
        ];

        const peliculas = await PeliculaSchema.find();

        if (peliculas.length > 0) {
            return;
        }

        await PeliculaSchema.insertMany(data);

    } catch (error) {
        console.error(JSON.stringify(error))
    }
}

module.exports = {
    seeders
}