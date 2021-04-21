const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema ~ how the data is going to look/be stored
var PostSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,

    }
});

// User Schema
// mongoose.Schema({
//     username: String,
//     password: String,
// });

//module.export = mongoose.model('Posts', PostSchema);
module.exports = {PostSchema: mongoose.model('posts', PostSchema)};
