const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    },
    sem: {
        type: Number,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    from:{
        type: String,
        required: true,
    },
    about:{
        type: String,
        required: true,
    },
    insta:{
        type: String,
        required: false,
    },
    github:{
        type: String,
        required: false,
    }
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;