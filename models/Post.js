const mongoose = require('mongoose');

//Schema ~ how the data is going to look/be stored
const PostSchema = mongoose.Schema({
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
        required: true
    },
});

// User Schema
// mongoose.Schema({
//     username: String,
//     password: String,

// });

module.export = mongoose.model('Posts', PostSchema);