const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  1: {
    type: Array,
  },
  2: {
    type: Array,
  },
  3: {
    type: Array,
  },
  4: {
    type: Array,
  },
  5: {
    type: Array,
  },
  6: {
    type: Array,
  },
  7: {
    type: Array,
  },
  8: {
    type: Array,
  },
});

const Course = mongoose.model('Sem', courseSchema);
module.exports = Course;