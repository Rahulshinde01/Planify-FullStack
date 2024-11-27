const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.url)

const megaSchema = new mongoose.Schema({
    tasks : String,
    description : String, 
    completed: {
        type: Boolean,
        default: false
    }
})

const megamodel = new mongoose.model("megamodels", megaSchema)

module.exports = {
    megamodel
};