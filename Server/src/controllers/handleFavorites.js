let myFavorites = [];

const postFav = (request, response) => {
    try {
        const character = request.body;
        const foundCharacter = myFavorites.find(fav => fav.id === character.id)

        if(foundCharacter) throw Error('Personaje repetido')
        
        myFavorites.push(character);

        return response.json(myFavorites);
    } 
    catch (error) {
            return response.status(404).send(error.message)
    }    
};

const deleteFav = (request, response) => {
    const {id} = request.params;
    myFavorites = myFavorites.filter((fav) => fav.id !== +id)  //capaz que necesitemos parsear id

    return response.json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
}
