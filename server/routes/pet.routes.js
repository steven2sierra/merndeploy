

// Template Controller
const PetController = require('../controllers/pet.controller');

// routes
module.exports = function(app) {
    app.get('/api/pets', PetController.allPets);
    app.post('/api/pets/new', PetController.createPet);
    app.put('/api/pets/update/:_id', PetController.updatePet);
    app.delete('/api/pets/destroy/:_id', PetController.deletePet);
    app.get('/api/pets/:_id', PetController.getPet);
}