const express = require("express");
const multer = require("multer");
const db = require("../db");

const router = express.Router();

// Configure file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Submit an assignment
router.post("/submit", upload.single("assignmentFile"), (req, res) => {
    const { studentName, enrollmentNumber, assignmentTitle, submissionDate } = req.body;
    const filePath = req.file.path;

    const sql = `INSERT INTO assignments (student_name, enrollment_number, assignment_title, submission_date, file_path)
                 VALUES (?, ?, ?, ?, ?)`;

    db.query(sql, [studentName, enrollmentNumber, assignmentTitle, submissionDate, filePath], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ message: "Assignment submitted successfully!" });
    });
});

// Fetch all assignments
router.get("/all", (req, res) => {
    db.query("SELECT * FROM assignments", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(200).json(results);
    });
});

module.exports = router;
