const mongoose = require('mongoose')


let testSchema = {
    firstname: {type: String, required: true,},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}

let testModel = mongoose.model("users", testSchema)

module.exports = testModel