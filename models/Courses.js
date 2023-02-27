const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  sem_1: {
    type: Array,
  },
  sem_2: {
    type: Array,
  },
  sem_3: {
    type: Array,
  },
  sem_4: {
    type: Array,
  },
  sem_5: {
    type: Array,
  },
  sem_6: {
    type: Array,
  },
  sem_7: {
    type: Array,
  },
  sem_8: {
    type: Array,
  },
});

const Course = mongoose.model("Sem", courseSchema);
module.exports = Course;
