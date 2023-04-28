const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (request, response) => {
    try {
        const { id } = request.params;
        const { data } = await axios(`${URL}/${id}`);

        if(!data.name)  throw Error (`ID ${id} not found`);// Hay que verificar si la respuesta tiene un personaje, entonces preguntamos si hay name. Data, si no encuentra al personaje, manda un objeto con info. Por eso preguntamos si hay nombre, porque es el requisito minimo para un personaje.
        
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,            
            status: data.status,
            gender: data.gender,            
            origin: data.origin, 
            species: data.species,                        
        }
        return response.status(200).json(character);

    } catch (error) {
        return error.message.includes('ID')
        ? response.status(404).send(error.message)
        : response.status(500).send('Not found');
    };
       
};              
    
module.exports = getCharById;



/*   axios(URL)
    .then(response => response.data)
    .then((char) => {
        const character = {
            id: id,
            name: name,
            gender: gender,
            species: species,
            origin: origin.name,
            status: status
        }
        return response
        .writeHead(200, {'Content-type': 'application/json'})
        .end(JSON.stringify(character))
    })
    .catch(error => {
        return response
        .writeHead(500, {'Content-type': 'text-plain'})
        .end(error.message)
    })*/