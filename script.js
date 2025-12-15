document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("assignmentForm");
    const assignmentsTable = document.getElementById("records-body");

    // 🔹 Submit Form Data to Backend
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("http://localhost:5000/api/assignments/submit", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            form.reset();
            fetchAssignments();  // Refresh assignments list
        })
        .catch(error => console.error("Error:", error));
    });

    // 🔹 Fetch Submitted Assignments from Backend
    function fetchAssignments() {
        fetch("http://localhost:5000/api/assignments/all")
        .then(response => response.json())
        .then(assignments => {
            assignmentsTable.innerHTML = ""; // Clear table before adding new data
            assignments.forEach(assignment => {
                let row = assignmentsTable.insertRow();
                row.innerHTML = `
                    <td>${assignment.id}</td>
                    <td>${assignment.student_name}</td>
                    <td>${assignment.enrollment_number}</td>
                    <td>${assignment.assignment_title}</td>
                    <td>${assignment.submission_date}</td>
                    <td><a href="http://localhost:5000/${assignment.file_path}" target="_blank">Download</a></td>
                `;
            });
        })
        .catch(error => console.error("Error:", error));
    }

    // Load assignments when page loads
    fetchAssignments();
});
