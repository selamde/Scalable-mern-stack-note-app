import Note from "../model/notes.model.js";
export const getAllNotes = async (req, res) => {
  // res.send("get all notes");
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNote = async (req, res) => {
  try {
    const result = await Note.findById(req.params.id);
    if (!result) {
      res.status(404).json({ message: "No Notes found by that id" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
  //   res.send("get single note");
};

export const createNote = async (req, res) => {
  //   res.send("create notes");
  try {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  //   res.send("update notes");
  try {
    const { title, content } = req.body;
    const result = await Note.findByIdAndUpdate(
      { _id: req.params.id },
      { title, content },
    );
    if (!result) res.status(404).json({ message: "No notes found by this id" });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  //   res.send("delete notes");
  try {
    const result = await Note.findByIdAndDelete(req.params.id);
    if (!result) res.status(404).json({ message: "No notes found by that id" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
