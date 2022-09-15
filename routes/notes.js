const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTES 1 : Get all notes using GET "api/notes/fetchallnotes".
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTES 2 : Add a new notes using POST "/api/notes/addnotes".
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await note.save();

      res.json(savedNotes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
