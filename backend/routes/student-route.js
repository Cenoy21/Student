import express from "express";
import Student from "../database/models/studentSchema.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/mark-attendance/:id", async (req, res) => {
  const { date, status } = req.body;
  const studentId = req.params.id;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    student.attendance[date] = status;
    await student.save();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/view-attendance/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json(student.attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
