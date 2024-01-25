import { Schema, model } from "mongoose";

const schema = Schema({
  name: {
    type: String,
    required: true,
  },
  roll_number: {
    type: String,
    required: true,
  },
  attendance: {
    type: Object,
    default: {},
  },
});

const Student = model("Student", schema);

export default Student;
