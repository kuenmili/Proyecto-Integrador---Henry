const {deleteFav, postFav} = require('../controllers/handleFavorites');
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');

const router = require('express').Router();

router.get("/character/:id", (request, response) => {
    getCharById(request,response);
});
router.get('/login', login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

// Router les manda request y response a los controllers desde aca.
// Tambien podria haber sido router.get('...', getCharById), que de manera automatica recibe request y response. Se ejecuta sola.

module.exports = router;