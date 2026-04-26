import mongoose from "mongoose";

//schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

//model

const Note = mongoose.model("Notes", noteSchema);

export default Note;
