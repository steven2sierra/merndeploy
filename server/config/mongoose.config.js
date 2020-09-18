const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/deploydb", { // change this
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went horribly wrong when connecting to the database", err));