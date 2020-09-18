
const { Pet } = require('../models/pet.model');

// '/' -> index
module.exports.allPets = (req, res) => {
    Pet.find({}).sort("type").exec() // sort pets in shelter by type
        .then(all => res.json(all))
        .catch(err => res.json({message: "Something went wrong...", error: err}))
}

// /new -> create a new author
module.exports.createPet = (req, res) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = req.body;
    // console log body
    console.log(req.body);
    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
}

// /Pets/:_id get an author
module.exports.getPet = (req,res) => {
    Pet.findOne({_id: req.params._id})
        .then(pets => res.json(pets))
        .catch(err => res.json(err));
}

// /edit/:_id -> update author by id
module.exports.updatePet = (req,res) => {
    // const { name } = req.body;
    Pet.findOneAndUpdate({_id: req.params._id }, req.body, {runValidators:true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.json(err));
}

// /delete/:_id -> delete author by id
module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id: req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}