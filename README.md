# 🎓 Student Assignment Submission Portal

A full-stack **Student Assignment Submission Portal** that allows students to upload assignment details and administrators to view and manage (delete) submissions. This project is built as an academic project to demonstrate **frontend–backend integration**, **CRUD operations**, and **database connectivity**.

---

## 🚀 Features

* 📤 Submit assignment details (student name, enrollment number, title, date)
* 📋 View all submitted assignments in a tabular format
* 🗑️ Delete assignment records
* 🌐 Frontend and backend connected using REST APIs
* 🎨 Clean and responsive user interface

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js
* MySQL
* CORS

---

## 📂 Project Structure

```
Student-Assignment-Submission-Portal/
│
├── index.html        # Frontend HTML
├── styles.css        # Frontend CSS
├── script.js         # Frontend JavaScript
│
├── server.js         # Backend server
├── package.json      # Node dependencies
├── package-lock.json
│
└── README.md         # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sulochan-Saw/Student-Assignment-Submission-Portal.git
cd Student-Assignment-Submission-Portal
```

---

### 2️⃣ Backend Setup

#### Install Dependencies

```bash
npm install
```

#### Create MySQL Database

```sql
CREATE DATABASE assignment_db;

USE assignment_db;

CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100),
    enrollment_number VARCHAR(50),
    assignment_title VARCHAR(100),
    submission_date DATE
);
```

#### Run the Backend Server

```bash
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

* Simply open `index.html` in your browser
* Or use **Live Server** in VS Code for best results

---

## 🔗 API Endpoints

| Method | Endpoint                      | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | `/api/assignments/submit`     | Submit assignment     |
| GET    | `/api/assignments/all`        | Fetch all assignments |
| DELETE | `/api/assignments/delete/:id` | Delete assignment     |

---

## 🎯 Learning Outcomes

* Understanding RESTful APIs
* Connecting frontend with backend
* CRUD operations using MySQL
* Handling CORS issues
* Real-world project structure

---

## 👨‍💻 Author

**Sulochan Saw**

* GitHub: [https://github.com/Sulochan-Saw](https://github.com/Sulochan-Saw)
* LeetCode: [https://leetcode.com/u/SulochanSaw/](https://leetcode.com/u/SulochanSaw/)

---

## 📜 License

This project is created for **educational purposes**. Feel free to use, modify, and enhance it.

---

✨ *This project was built with guidance and assistance from ChatGPT.*
